type ProfileId = 'htb' | 'thm';

type LiveParameter = {
  label: string;
  value: string;
};

type ProfilePayload = {
  displayName: string;
  parameters: LiveParameter[];
  source: 'live' | 'unavailable';
};

const endpoints: Record<ProfileId, string> = {
  htb: 'https://profile.hackthebox.com/profile/019d5150-7665-7389-841a-1aa9bc3e53d8',
  thm: 'https://tryhackme.com/p/zeroopsX',
};

const profileNames: Record<ProfileId, string> = {
  htb: 'Hack The Box',
  thm: 'TryHackMe',
};

export const dynamic = 'force-dynamic';

function cleanText(value: string) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function getMetaContent(html: string, property: string) {
  const pattern = new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i');
  return html.match(pattern)?.[1];
}

function firstMatch(html: string, patterns: RegExp[]) {
  for (const pattern of patterns) {
    const match = html.match(pattern);

    if (match?.[1]) {
      return cleanText(match[1]);
    }
  }

  return undefined;
}

function uniqueParameters(parameters: LiveParameter[]) {
  const seen = new Set<string>();

  return parameters.filter((parameter) => {
    const key = `${parameter.label}:${parameter.value}`.toLowerCase();

    if (!parameter.value || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

async function fetchWithTimeout(url: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6500);

  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'user-agent': 'ZeroOpsX-Portfolio-Telemetry/1.0',
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Upstream returned ${response.status}`);
    }

    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function parseHtb(html: string): ProfilePayload {
  const title = cleanText(getMetaContent(html, 'og:title') ?? html.match(/<title[^>]*>(.*?)<\/title>/i)?.[1] ?? profileNames.htb);
  const rank = firstMatch(html, [/global\s*rank[^0-9#]*([#\d,]+)/i, /rank[^0-9#]*([#\d,]+)/i]);
  const points = firstMatch(html, [/points[^0-9]*([\d,]+)/i, /ownership[^0-9]*([\d,]+)/i]);
  const badges = firstMatch(html, [/badges[^0-9]*([\d,]+)/i]);
  const respect = firstMatch(html, [/respect[^0-9]*([\d,]+)/i]);

  const parameters = uniqueParameters([
    ...(rank ? [{ label: 'Global Rank', value: rank }] : []),
    ...(points ? [{ label: 'Points', value: points }] : []),
    ...(badges ? [{ label: 'Badges', value: badges }] : []),
    ...(respect ? [{ label: 'Respect', value: respect }] : []),
  ]);

  return {
    displayName: title,
    source: 'live',
    parameters,
  };
}

function parseThm(html: string): ProfilePayload {
  const title = cleanText(getMetaContent(html, 'og:title') ?? html.match(/<title[^>]*>(.*?)<\/title>/i)?.[1] ?? profileNames.thm);
  const rank = firstMatch(html, [/rank[^0-9#]*([#\d,]+)/i]);
  const points = firstMatch(html, [/points[^0-9]*([\d,]+)/i]);
  const rooms = firstMatch(html, [/rooms?[^0-9]*([\d,]+)/i]);
  const badges = firstMatch(html, [/badges[^0-9]*([\d,]+)/i]);
  const streak = firstMatch(html, [/streak[^0-9]*([\d,]+)/i]);

  const parameters = uniqueParameters([
    ...(rank ? [{ label: 'Rank', value: rank }] : []),
    ...(points ? [{ label: 'Points', value: points }] : []),
    ...(rooms ? [{ label: 'Rooms', value: rooms }] : []),
    ...(badges ? [{ label: 'Badges', value: badges }] : []),
    ...(streak ? [{ label: 'Streak', value: streak }] : []),
  ]);

  return {
    displayName: title,
    source: 'live',
    parameters,
  };
}

async function getProfile(id: ProfileId): Promise<ProfilePayload> {
  try {
    const html = await fetchWithTimeout(endpoints[id]);
    return id === 'htb' ? parseHtb(html) : parseThm(html);
  } catch {
    return {
      displayName: profileNames[id],
      source: 'unavailable',
      parameters: [],
    };
  }
}

export async function GET() {
  const [htb, thm] = await Promise.all([getProfile('htb'), getProfile('thm')]);
  const liveCount = [htb, thm].filter((profile) => profile.source === 'live').length;
  const status = liveCount === 2 ? 'live' : liveCount === 1 ? 'partial' : 'unavailable';

  return Response.json({
    status,
    updatedAt: new Date().toISOString(),
    profiles: {
      htb,
      thm,
    },
  });
}
