'use client';

import React, { FormEvent, useState } from 'react';
import {
  AtSign as Twitter,
  BookOpen,
  ChevronRight,
  Cpu,
  Download,
  GitBranch as GitHub,
  Key,
  Lock,
  Mail,
  PlusCircle,
  Radio as Facebook,
  Send,
  Shield,
  ShieldAlert,
  Sliders,
  Target,
  Terminal,
} from 'lucide-react';

type ActiveTab = 'overview' | 'os' | 'tools' | 'blog';

type BlogPost = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ZeroOpsX',
    icon: GitHub,
    detail: '@ZeroOpsX',
  },
  {
    label: 'ProtonMail',
    href: 'mailto:ZeroOpsX@proton.me',
    icon: Mail,
    detail: 'ZeroOpsX@proton.me',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/ZeroOpsX',
    icon: Send,
    detail: '@ZeroOpsX',
  },
  {
    label: 'X',
    href: 'https://x.com/ZeroOpsX',
    icon: Twitter,
    detail: '@ZeroOpsX',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/ZeroOpsX',
    icon: Facebook,
    detail: '/ZeroOpsX',
  },
];

const cyberProfiles = [
  {
    platform: 'Hack The Box',
    alias: 'HTB',
    href: 'https://app.hackthebox.com/profile/ZeroOpsX',
    icon: Terminal,
    stats: ['Rank: Pro Hacker', 'Top 1%', 'Platform ID: ZeroOpsX'],
  },
  {
    platform: 'TryHackMe',
    alias: 'THM',
    href: 'https://tryhackme.com/p/ZeroOpsX',
    icon: Target,
    stats: ['Rank: Pro Hacker', 'Rooms Cleared: 150+', 'Platform ID: ZeroOpsX'],
  },
];

const voidSystems = [
  {
    name: 'Void OS',
    edition: 'Windows Edition',
    description: 'Custom hardened, telemetry-blinded enterprise environment tuned for controlled adversary simulation workflows.',
    checksum: '8d9a0f3e3d2a56f38c8e2a7bb153f62edb4f4105b5a4c908db58c1342f1d0a77',
    size: '4.6 GB',
    features: [
      'Telemetry-blinded enterprise baseline',
      'Signed driver research lab profile',
      'Windows internals toolkit staging',
    ],
  },
  {
    name: 'Void OS',
    edition: 'Linux Edition',
    description: 'Extreme opacity, kernel-tailored adversary simulation platform built for fast operator movement and lab automation.',
    checksum: 'c514dbe8074ec4f41fbb2dc0c3acb8f47b63af0f8149e6ab0e95de7d317c910d',
    size: '3.9 GB',
    features: [
      'Kernel-tailored simulation stack',
      'Rust, LLVM, and low-level debug chain',
      'Isolated payload analysis workspace',
    ],
  },
];

const initialPosts: BlogPost[] = [
  {
    title: 'Mapping Kernel Attack Surfaces Without Burning Telemetry',
    date: '2026-06-03',
    category: 'Kernel Exploitation',
    excerpt: 'A field note on modeling privileged execution paths, validating assumptions, and keeping research environments deterministic.',
  },
  {
    title: 'EDR Signal Decomposition in Adversary Simulation Labs',
    date: '2026-05-27',
    category: 'EDR Evasion',
    excerpt: 'Breaking endpoint visibility into collection, correlation, and response layers to reason about defensive pressure.',
  },
  {
    title: 'Operator Workflows for Void OS Build Pipelines',
    date: '2026-05-11',
    category: 'Red Team Ops',
    excerpt: 'How reproducible OS images, checksum discipline, and staged toolchains reduce friction during controlled engagements.',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [adminOpen, setAdminOpen] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [draftTitle, setDraftTitle] = useState('');
  const [draftCategory, setDraftCategory] = useState('');
  const [draftContent, setDraftContent] = useState('');

  const publishPost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = draftTitle.trim();
    const category = draftCategory.trim();
    const content = draftContent.trim();

    if (!title || !category || !content) {
      return;
    }

    const newPost: BlogPost = {
      title,
      category,
      excerpt: content,
      date: new Date().toISOString().slice(0, 10),
    };

    setPosts((currentPosts) => [newPost, ...currentPosts]);
    setDraftTitle('');
    setDraftCategory('');
    setDraftContent('');
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060a13] text-slate-100 antialiased selection:bg-red-500/30 selection:text-red-200">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#141b2d_1px,transparent_1px),linear-gradient(to_bottom,#141b2d_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[430px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-red-700/20 blur-[155px]" />
      <div className="pointer-events-none absolute bottom-4 right-0 h-[340px] w-[340px] rounded-full bg-red-500/10 blur-[125px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">
        <header className="relative mb-8 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 shadow-2xl shadow-black/40 backdrop-blur-md md:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent" />

          <div className="grid gap-6 xl:grid-cols-[1fr_520px] xl:items-start">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-80" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-red-400">
                  C2 & Weaponization Hub
                </span>
              </div>

              <h1 className="font-mono text-4xl font-black tracking-normal text-white md:text-5xl">
                ZeroOpsX <span className="text-red-500">{'//'}</span>
              </h1>
              <p className="mt-3 max-w-2xl font-mono text-xs leading-relaxed text-slate-400 md:text-sm">
                Kernel-Level Malware Architect. Developing customized adversary simulation environments and evasion payloads.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cyberProfiles.map((profile) => {
                  const Icon = profile.icon;

                  return (
                    <a
                      key={profile.platform}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-red-500/[0.06] p-4 font-mono transition hover:-translate-y-0.5 hover:border-red-500/60 hover:bg-red-500/10 hover:shadow-[0_0_34px_rgba(239,68,68,0.16)]"
                    >
                      <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-red-500/10 blur-2xl" />
                      <div className="relative flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-500/30 bg-black/50 text-red-400">
                            <Icon size={17} />
                          </span>
                          <div>
                            <p className="text-xs font-bold text-slate-100">{profile.platform}</p>
                            <p className="text-[10px] text-red-300/80">NODE: {profile.alias}</p>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-red-300/50 transition group-hover:text-red-300" />
                      </div>
                      <div className="relative mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
                        {profile.stats.map((stat) => (
                          <span key={stat} className="rounded border border-slate-800 bg-black/40 px-2 py-1">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group flex min-h-14 items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/85 px-3 py-2 font-mono transition hover:border-red-500/50 hover:bg-slate-900 hover:shadow-[0_0_24px_rgba(239,68,68,0.14)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-800 bg-black/40 text-red-400 transition group-hover:border-red-500/50">
                      <Icon size={15} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold text-slate-200">{link.label}</span>
                      <span className="block truncate text-[10px] text-slate-500">{link.detail}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="mt-8 grid gap-2 border-t border-slate-800/80 pt-5 font-mono text-xs sm:grid-cols-2 xl:grid-cols-4">
            {[
              { id: 'overview' as const, label: '[01 // INTEL_OVERVIEW]' },
              { id: 'os' as const, label: '[02 // OPERATIONAL_OS]' },
              { id: 'tools' as const, label: '[03 // WEAPON_ARSENAL]' },
              { id: 'blog' as const, label: '[04 // CYBER_LOGS_BLOG]' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-11 rounded-lg border px-3 py-2 text-left font-bold transition ${
                  activeTab === tab.id
                    ? 'border-red-500/70 bg-red-500/10 text-red-300 shadow-[0_0_26px_rgba(239,68,68,0.16)]'
                    : 'border-slate-800 bg-slate-950/40 text-slate-500 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </header>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
            <div className="flex flex-col gap-6">
              <section className="rounded-xl border border-slate-800/70 bg-slate-950/40 p-5">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-slate-300">
                  <Shield size={14} className="text-red-500" /> Core Intel
                </h2>
                <div className="space-y-4 font-mono text-xs text-slate-300">
                  <p>
                    <span className="block text-slate-500">{'// RETAINED ROLE'}</span>
                    Adversarial Researcher
                  </p>
                  <p>
                    <span className="block text-slate-500">{'// LAYER ACCESS'}</span>
                    Ring 0 / Kernel Mode
                  </p>
                  <p>
                    <span className="block text-slate-500">{'// TARGET ENVIRONMENT'}</span>
                    Windows Enterprise
                  </p>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800/70 bg-slate-950/40 p-5">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-slate-300">
                  <Cpu size={14} className="text-red-500" /> Tech Stack
                </h2>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {['C', 'C++', 'Rust', 'Asm x64', 'WDK', 'BYOVD', 'Sliver', 'Havoc'].map((tech) => (
                    <span key={tech} className="rounded border border-slate-800 bg-slate-950 px-2 py-1 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-5">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-slate-300">
                  <ShieldAlert size={14} className="text-red-500" /> {'// WARFARE_PROFILE_SIGNAL'}
                </h2>
                <div className="space-y-2 font-mono text-[11px] text-slate-400">
                  <p className="flex items-center justify-between rounded border border-slate-800 bg-black/35 px-3 py-2">
                    <span>HTB Signal</span>
                    <span className="text-red-300">Top 1%</span>
                  </p>
                  <p className="flex items-center justify-between rounded border border-slate-800 bg-black/35 px-3 py-2">
                    <span>THM Track</span>
                    <span className="text-red-300">Pro Hacker</span>
                  </p>
                </div>
              </section>
            </div>

            <section className="relative overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/40 p-6">
              <div className="pointer-events-none absolute right-4 top-4 h-28 w-28 rounded-full bg-red-500/10 blur-3xl" />
              <h3 className="mb-4 font-mono text-sm font-bold text-slate-200">{'// ADVERSARIAL PHENOMENON'}</h3>
              <div className="rounded-xl border border-red-500/15 bg-gradient-to-br from-red-500/[0.08] via-slate-950 to-black p-5 shadow-[inset_0_0_42px_rgba(239,68,68,0.05)]">
                <p className="font-mono text-xs leading-relaxed text-slate-400 md:text-sm">
                  Modern endpoint defenses rely on standard assumptions of trust. My research targets the architectural gaps between user-land detection matrices and hardware execution loops.
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-slate-800 bg-black/65 p-4 font-mono text-xs shadow-2xl shadow-black/30">
                <div className="mb-3 flex items-center justify-between border-b border-slate-900 pb-3">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Terminal size={13} />
                    zeroopsx@red-cell:~$
                  </div>
                  <span className="text-[10px] text-red-400">LIVE CHECK</span>
                </div>
                <div className="space-y-2 text-red-300/90">
                  <p>[+] Target Status: Fully Compromised</p>
                  <p>[+] Endpoint Telemetry: Terminated</p>
                  <p>[+] Kernel Surface: Mapped</p>
                  <p>[+] Status: Monitoring the defenders...</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'os' && (
          <section className="space-y-6">
            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-5 md:p-6">
              <div className="mb-2 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red-300">
                The Void OS Project
              </div>
              <h2 className="font-mono text-2xl font-bold text-white md:text-3xl">Dual Ecosystem Red Team Images</h2>
              <p className="mt-2 max-w-3xl font-mono text-xs leading-relaxed text-slate-400">
                Two hardened operating environments sharing one command philosophy: reproducible staging, low-noise lab operations, and aggressive tactical ergonomics.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {voidSystems.map((system) => (
                <article
                  key={system.edition}
                  className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/55 p-5 shadow-2xl shadow-black/25 transition hover:border-red-500/40 hover:shadow-[0_0_34px_rgba(239,68,68,0.12)] md:p-6"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-red-500/10 blur-3xl" />
                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-red-400">Operational OS</p>
                        <h3 className="mt-2 font-mono text-2xl font-black text-white">
                          {system.name} <span className="text-red-500">{'//'}</span>
                        </h3>
                        <p className="font-mono text-sm text-slate-400">{system.edition}</p>
                      </div>
                      <span className="rounded border border-red-500/25 bg-red-500/10 px-2.5 py-1 font-mono text-[10px] text-red-300">
                        ISO {system.size}
                      </span>
                    </div>

                    <p className="font-mono text-xs leading-relaxed text-slate-400">{system.description}</p>

                    <div className="mt-5">
                      <h4 className="mb-3 flex items-center gap-2 font-mono text-xs font-bold text-red-300">
                        <Sliders size={14} /> System Features
                      </h4>
                      <ul className="space-y-2 font-mono text-xs text-slate-400">
                        {system.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <ChevronRight size={13} className="mt-0.5 shrink-0 text-red-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-red-300/30 bg-red-600 px-5 py-3 font-mono text-xs font-black text-white shadow-[0_0_32px_rgba(220,38,38,0.28)] transition hover:bg-red-500"
                    >
                      <Download size={15} /> DOWNLOAD ISO
                    </button>

                    <div className="mt-5 rounded-xl border border-slate-800 bg-black/55 p-4 font-mono">
                      <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        <Terminal size={12} /> SHA-256 Validation Terminal
                      </div>
                      <code className="block break-all rounded border border-slate-900 bg-slate-950 px-3 py-2 text-[11px] leading-relaxed text-red-200/90">
                        {system.checksum}
                      </code>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'tools' && (
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                name: '[Zero-Loader]',
                status: 'FUD / Evasion',
                statusClass: 'border-red-500/25 bg-red-500/10 text-red-300',
                lang: 'C++ / ASM',
                body: 'An advanced dynamic PE execution system utilizing indirect unhooked syscalls to bypass AV/EDR runtime instrumentation.',
              },
              {
                name: '[Kernel-Shredder]',
                status: 'Ring 0 / Drivers',
                statusClass: 'border-red-500/25 bg-red-500/10 text-red-300',
                lang: 'C / WDK',
                body: 'Windows Kernel execution kit utilizing signed vulnerable drivers (BYOVD) to surgically blind target security telemetry streams.',
              },
            ].map((project) => (
              <article
                key={project.name}
                className="flex min-h-56 flex-col justify-between rounded-xl border border-slate-800/70 bg-slate-950/50 p-5 transition hover:border-red-500/45 hover:shadow-[0_0_32px_rgba(239,68,68,0.12)]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-bold text-red-400">{project.name}</span>
                    <span className={`rounded border px-2 py-1 font-mono text-[10px] ${project.statusClass}`}>{project.status}</span>
                  </div>
                  <p className="font-mono text-xs leading-relaxed text-slate-400">{project.body}</p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-900 pt-4">
                  <span className="font-mono text-[10px] text-slate-500">Lang: {project.lang}</span>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-[11px] font-bold text-slate-200 transition hover:border-red-500/40 hover:bg-slate-700"
                  >
                    <Download size={11} /> Clone Build
                  </button>
                </div>
              </article>
            ))}
          </section>
        )}

        {activeTab === 'blog' && (
          <section className="space-y-5">
            <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-5 md:p-6">
              <button
                type="button"
                onClick={() => setAdminOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-3 rounded-lg border border-red-500/25 bg-black/40 px-4 py-3 font-mono text-left transition hover:border-red-500/50 hover:bg-red-500/[0.05]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-red-500/30 bg-red-500/10 text-red-300">
                    <Lock size={15} />
                  </span>
                  <span>
                    <span className="block text-xs font-black text-red-300">ADMIN PORTAL</span>
                    <span className="block text-[10px] text-slate-500">Local mock publishing console</span>
                  </span>
                </span>
                <span className="text-xs text-slate-500">{adminOpen ? 'COLLAPSE' : 'EXPAND'}</span>
              </button>

              {adminOpen && (
                <form onSubmit={publishPost} className="mt-4 grid gap-3 font-mono">
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      Post Title
                      <input
                        value={draftTitle}
                        onChange={(event) => setDraftTitle(event.target.value)}
                        className="mt-2 min-h-11 w-full rounded-lg border border-slate-800 bg-black/55 px-3 text-xs text-slate-200 outline-none transition placeholder:text-slate-700 focus:border-red-500/60"
                        placeholder="Signal title"
                      />
                    </label>
                    <label className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      Category
                      <input
                        value={draftCategory}
                        onChange={(event) => setDraftCategory(event.target.value)}
                        className="mt-2 min-h-11 w-full rounded-lg border border-slate-800 bg-black/55 px-3 text-xs text-slate-200 outline-none transition placeholder:text-slate-700 focus:border-red-500/60"
                        placeholder="Kernel Exploitation"
                      />
                    </label>
                  </div>
                  <label className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Log Content
                    <textarea
                      value={draftContent}
                      onChange={(event) => setDraftContent(event.target.value)}
                      className="mt-2 min-h-28 w-full resize-none rounded-lg border border-slate-800 bg-black/55 p-3 text-xs leading-relaxed text-slate-200 outline-none transition placeholder:text-slate-700 focus:border-red-500/60"
                      placeholder="Write local log excerpt..."
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-red-300/30 bg-red-600 px-4 py-2 text-xs font-black text-white shadow-[0_0_26px_rgba(220,38,38,0.22)] transition hover:bg-red-500 md:w-auto"
                  >
                    <PlusCircle size={15} /> Publish to Local State
                  </button>
                </form>
              )}
            </div>

            <div className="grid gap-4">
              {posts.map((post) => (
                <article
                  key={`${post.date}-${post.title}`}
                  className="rounded-xl border border-slate-800/75 bg-slate-950/50 p-5 transition hover:border-red-500/35 hover:bg-slate-950/70 hover:shadow-[0_0_28px_rgba(239,68,68,0.1)]"
                >
                  <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      <BookOpen size={13} className="text-red-400" />
                      {post.date}
                    </div>
                    <span className="w-fit rounded border border-red-500/25 bg-red-500/10 px-2.5 py-1 font-mono text-[10px] text-red-300">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-mono text-lg font-black text-slate-100">{post.title}</h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-slate-400">{post.excerpt}</p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-800 bg-black/35 px-3 py-2 font-mono text-[11px] font-bold text-slate-300 transition hover:border-red-500/45 hover:text-red-300"
                  >
                    Read Log <ChevronRight size={12} />
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-6 text-center font-mono text-[10px] text-slate-600 md:flex-row">
          <p>&copy; 2026 ZeroOpsX. All rights encrypted.</p>
          <p className="flex items-center gap-1 text-red-500/50">
            <Key size={10} /> PGP: REQUEST FOR RECON
          </p>
        </footer>
      </div>
    </main>
  );
}
