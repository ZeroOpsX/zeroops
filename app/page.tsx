'use client';

import React, { useState } from 'react';
import {
  AtSign,
  ChevronRight,
  Cpu,
  Download,
  GitBranch,
  Key,
  Mail,
  Radio,
  Send,
  Shield,
  ShieldAlert,
  Sliders,
  Target,
  Terminal,
} from 'lucide-react';

type ActiveTab = 'overview' | 'os' | 'tools';

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ZeroOpsX',
    icon: GitBranch,
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
    icon: AtSign,
    detail: '@ZeroOpsX',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/ZeroOpsX',
    icon: Radio,
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

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060a13] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#141b2d_1px,transparent_1px),linear-gradient(to_bottom,#141b2d_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <header className="relative mb-8 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/55 p-5 shadow-2xl shadow-black/40 backdrop-blur-md md:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

          <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">
                  C2 & Weaponization Hub
                </span>
              </div>

              <h1 className="font-mono text-4xl font-black tracking-normal text-white md:text-5xl">
                ZeroOpsX <span className="text-emerald-400">{'//'}</span>
              </h1>
              <p className="mt-3 max-w-2xl font-mono text-xs leading-relaxed text-slate-400 md:text-sm">
                Kernel-Level Malware Architect. Developing customized adversary simulation environments and evasion payloads.
              </p>
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
                    className="group flex min-h-14 items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 font-mono transition hover:border-emerald-500/50 hover:bg-slate-900 hover:shadow-[0_0_24px_rgba(16,185,129,0.12)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-800 bg-black/40 text-emerald-400 transition group-hover:border-emerald-500/50">
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

          <nav className="mt-8 flex flex-col gap-2 border-t border-slate-800/80 pt-5 font-mono text-xs sm:flex-row">
            {[
              { id: 'overview' as const, label: '[01 // INTEL_OVERVIEW]' },
              { id: 'os' as const, label: '[02 // OPERATIONAL_OS]' },
              { id: 'tools' as const, label: '[03 // WEAPON_ARSENAL]' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-11 flex-1 rounded-lg border px-3 py-2 text-left font-bold transition ${
                  activeTab === tab.id
                    ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.12)]'
                    : 'border-slate-800 bg-slate-950/40 text-slate-500 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </header>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[310px_1fr]">
            <div className="flex flex-col gap-6">
              <section className="rounded-xl border border-slate-800/70 bg-slate-950/35 p-5">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-slate-300">
                  <Shield size={14} className="text-emerald-500" /> Core Intel
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

              <section className="rounded-xl border border-slate-800/70 bg-slate-950/35 p-5">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-slate-300">
                  <Cpu size={14} className="text-emerald-500" /> Tech Stack
                </h2>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {['C', 'C++', 'Rust', 'Asm x64', 'WDK', 'BYOVD', 'Sliver', 'Havoc'].map((tech) => (
                    <span key={tech} className="rounded border border-slate-800 bg-slate-950 px-2 py-1 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-slate-800/70 bg-slate-950/35 p-5">
                <h2 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-slate-300">
                  <ShieldAlert size={14} className="text-emerald-500" /> {'// CYBER_WARFARE_PROFILES'}
                </h2>
                <div className="space-y-3">
                  {cyberProfiles.map((profile) => {
                    const Icon = profile.icon;

                    return (
                      <a
                        key={profile.platform}
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-lg border border-slate-800 bg-black/30 p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/[0.04] hover:shadow-[0_0_26px_rgba(16,185,129,0.13)]"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 bg-slate-950 text-emerald-400 transition group-hover:border-emerald-500/60">
                              <Icon size={16} />
                            </span>
                            <div className="font-mono">
                              <p className="text-xs font-bold text-slate-100">{profile.platform}</p>
                              <p className="text-[10px] text-slate-500">NODE: {profile.alias}</p>
                            </div>
                          </div>
                          <ChevronRight size={14} className="text-slate-600 transition group-hover:text-emerald-400" />
                        </div>
                        <div className="space-y-1 font-mono text-[10px] text-slate-400">
                          {profile.stats.map((stat) => (
                            <p key={stat} className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-emerald-400" />
                              {stat}
                            </p>
                          ))}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            </div>

            <section className="relative overflow-hidden rounded-xl border border-slate-800/70 bg-slate-950/35 p-6">
              <div className="pointer-events-none absolute right-4 top-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl" />
              <h3 className="mb-4 font-mono text-sm font-bold text-slate-200">{'// ADVERSARIAL PHENOMENON'}</h3>
              <div className="rounded-xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.08] via-slate-950 to-black p-5 shadow-[inset_0_0_40px_rgba(16,185,129,0.04)]">
                <p className="font-mono text-xs leading-relaxed text-slate-400 md:text-sm">
                  Modern endpoint defenses rely on standard assumptions of trust. My research targets the architectural gaps between user-land detection matrices and hardware execution loops.
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-slate-800 bg-black/60 p-4 font-mono text-xs shadow-2xl shadow-black/30">
                <div className="mb-3 flex items-center justify-between border-b border-slate-900 pb-3">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Terminal size={13} />
                    zeroopsx@c2-core:~$
                  </div>
                  <span className="text-[10px] text-emerald-400">LIVE CHECK</span>
                </div>
                <div className="space-y-2 text-emerald-400/90">
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
          <section className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-6 shadow-2xl shadow-black/30 md:p-8">
            <div className="mb-6 flex flex-col justify-between gap-5 border-b border-slate-800/70 pb-6 md:flex-row md:items-center">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-400">
                  Stable Deployment
                </div>
                <h2 className="flex flex-wrap items-baseline gap-2 font-mono text-2xl font-bold text-white md:text-3xl">
                  ZeroOps-OS <span className="text-sm text-slate-500">v1.2.0-Alpha</span>
                </h2>
                <p className="mt-2 max-w-2xl font-mono text-xs leading-relaxed text-slate-400">
                  Custom hardened Red Teaming environment built for extreme opacity, rapid toolchain deployment, and tactical operator workflows.
                </p>
              </div>

              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/40 bg-emerald-500 px-6 py-4 font-mono text-xs font-black text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.25)] transition hover:bg-emerald-400 md:w-auto"
              >
                <Download size={16} /> DOWNLOAD ISO (3.8 GB)
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 font-mono text-xs md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-bold text-emerald-400">
                  <Sliders size={14} /> Integrated Subsystems
                </h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>
                      <strong className="text-slate-200">Kernel Hook Shield:</strong> Blocks common internal telemetry collection modules.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>
                      <strong className="text-slate-200">Pre-Compiled Toolchains:</strong> Native setup for Rust, LLVM, and Assembly debuggers.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-900 bg-black/40 p-4">
                <h3 className="mb-3 font-bold text-slate-400">{'// CRYPTOGRAPHIC_VERIFICATION'}</h3>
                <span className="block text-[10px] text-slate-600">SHA-256 Checksum:</span>
                <code className="mt-2 block break-all rounded border border-slate-800 bg-slate-950/90 px-3 py-2 text-[11px] leading-relaxed text-slate-300">
                  a8fbc83d21920ee41892c901192fa2c4d6f88d29c831a2938fd8219ef01a1c92
                </code>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'tools' && (
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                name: '[Zero-Loader]',
                status: 'FUD / Evasion',
                statusClass: 'border-red-500/20 bg-red-500/10 text-red-400',
                lang: 'C++ / ASM',
                body: 'An advanced dynamic PE execution system utilizing indirect unhooked syscalls to bypass AV/EDR runtime instrumentation.',
              },
              {
                name: '[Kernel-Shredder]',
                status: 'Ring 0 / Drivers',
                statusClass: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
                lang: 'C / WDK',
                body: 'Windows Kernel execution kit utilizing signed vulnerable drivers (BYOVD) to surgically blind target security telemetry streams.',
              },
            ].map((project) => (
              <article
                key={project.name}
                className="flex min-h-56 flex-col justify-between rounded-xl border border-slate-800/70 bg-slate-950/45 p-5 transition hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-400">{project.name}</span>
                    <span className={`rounded border px-2 py-1 font-mono text-[10px] ${project.statusClass}`}>{project.status}</span>
                  </div>
                  <p className="font-mono text-xs leading-relaxed text-slate-400">{project.body}</p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-900 pt-4">
                  <span className="font-mono text-[10px] text-slate-500">Lang: {project.lang}</span>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-[11px] font-bold text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-700"
                  >
                    <Download size={11} /> Clone Build
                  </button>
                </div>
              </article>
            ))}
          </section>
        )}

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-6 text-center font-mono text-[10px] text-slate-600 md:flex-row">
          <p>&copy; 2026 ZeroOpsX. All rights encrypted.</p>
          <p className="flex items-center gap-1 text-emerald-500/40">
            <Key size={10} /> PGP: REQUEST FOR RECON
          </p>
        </footer>
      </div>
    </main>
  );
}
