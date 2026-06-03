'use client';

import React, { useState } from 'react';
import { Terminal, Shield, Cpu, Binary, Github, Mail, Key, Download, ChevronRight, Sliders } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'os' | 'tools'>('overview');

  return (
    <div className="min-h-screen bg-[#060a13] text-slate-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-400">
      
      {/* Tactical Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141b2d_1px,transparent_1px),linear-gradient(to_bottom,#141b2d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        
        {/* HEADER */}
        <header className="border border-slate-800/80 bg-slate-900/30 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-bold">C2 & Weaponization Hub</span>
              </div>
              <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent font-mono">
                ZeroOpsX //
              </h1>
              <p className="text-slate-400 mt-2 font-mono text-xs max-w-xl leading-relaxed">
                Kernel-Level Malware Architect. Developing customized adversary simulation environments and evasion payloads.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 font-mono text-xs">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 px-4 py-2 rounded-lg border border-slate-800 transition">
                <Github size={13} className="text-emerald-400" /> GitHub
              </a>
              <a href="mailto:ZeroOpsX@proton.me" className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 px-4 py-2 rounded-lg border border-slate-800 transition">
                <Mail size={13} className="text-emerald-400" /> ProtonMail
              </a>
            </div>
          </div>

          {/* INTERNAL NAVIGATION */}
          <div className="flex border-b border-slate-800/80 mt-8 gap-2 font-mono text-xs">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-2 transition border-b-2 font-bold ${activeTab === 'overview' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              [01 // INTEL_OVERVIEW]
            </button>
            <button 
              onClick={() => setActiveTab('os')}
              className={`pb-3 px-2 transition border-b-2 font-bold ${activeTab === 'os' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              [02 // OPERATIONAL_OS]
            </button>
            <button 
              onClick={() => setActiveTab('tools')}
              className={`pb-3 px-2 transition border-b-2 font-bold ${activeTab === 'tools' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              [03 // WEAPON_ARSENAL]
            </button>
          </div>
        </header>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex flex-col gap-6">
              <section className="border border-slate-800/60 bg-slate-900/10 rounded-xl p-5">
                <h2 className="text-xs font-bold text-slate-400 uppercase mb-3 font-mono flex items-center gap-2">
                  <Shield size={14} className="text-emerald-500" /> Core Intel
                </h2>
                <div className="space-y-3 font-mono text-xs text-slate-300">
                  <p><span className="text-slate-500 block">// RETAINED ROLE</span> Adversarial Researcher</p>
                  <p><span className="text-slate-500 block">// LAYER ACCESS</span> Ring 0 (Kernel Mode)</p>
                  <p><span className="text-slate-500 block">// TARGET ENVIRONMENT</span> Windows Enterprise</p>
                </div>
              </section>

              <section className="border border-slate-800/60 bg-slate-900/10 rounded-xl p-5">
                <h2 className="text-xs font-bold text-slate-400 uppercase mb-3 font-mono flex items-center gap-2">
                  <Cpu size={14} className="text-emerald-500" /> Tech Stack
                </h2>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {['C', 'C++', 'Rust', 'Asm x64', 'WDK', 'BYOVD', 'Sliver', 'Havoc'].map((tech) => (
                    <span key={tech} className="bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded text-slate-400">{tech}</span>
                  ))}
                </div>
              </section>
            </div>

            <div className="md:col-span-2 flex flex-col gap-6">
              <section className="border border-slate-800/60 bg-slate-900/10 rounded-xl p-6">
                <h3 className="text-sm font-bold text-slate-300 font-mono mb-3">// ADVERSARIAL PHENOMENON</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Modern endpoint defenses rely on standard assumptions of trust. My research targets the architectural gaps between user-land detection matrices and hardware execution loops.
                </p>
                <div className="p-4 bg-black/40 border border-slate-900 rounded-lg font-mono text-xs text-emerald-400/90 space-y-1">
                  <p>[+] Target Status: Fully Compromised</p>
                  <p>[+] Endpoint Telemetry: Terminated</p>
                  <p>[+] Status: Monitoring the defenders...</p>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* TAB 2: OS DOWNLOAD PAGE */}
        {activeTab === 'os' && (
          <div className="space-y-6">
            <div className="border border-slate-800/80 bg-slate-900/20 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-slate-800/60">
                <div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-2">
                    Stable Deployment
                  </div>
                  <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-2">
                    ZeroOps-OS <span className="text-slate-500 text-sm">v1.2.0-Alpha</span>
                  </h2>
                  <p className="text-slate-400 text-xs font-mono mt-1">Custom hardened Red Teaming environment built for extreme opacity.</p>
                </div>
                
                <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-mono font-bold text-xs px-5 py-3 rounded-xl transition shadow-lg shrink-0 w-full md:w-auto justify-center">
                  <Download size={14} /> DOWNLOAD ISO (3.8 GB)
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                <div className="space-y-4">
                  <h3 className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Sliders size={13} /> Integrated Subsystems
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2 text-slate-400">
                      <ChevronRight size={12} className="text-emerald-500 mt-0.5" /> 
                      <span><strong className="text-slate-200">Kernel Hook Shield:</strong> Blocks common internal telemetry collection modules.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-400">
                      <ChevronRight size={12} className="text-emerald-500 mt-0.5" /> 
                      <span><strong className="text-slate-200">Pre-Compiled Toolchains:</strong> Native setup for Rust, LLVM, and Assembly debuggers.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 bg-black/30 p-4 border border-slate-900 rounded-xl">
                  <h3 className="text-slate-400 font-bold">// CRYPTOGRAPHIC VERIFICATION</h3>
                  <div className="space-y-2 text-[11px]">
                    <div>
                      <span className="text-slate-600 block">SHA-256 Checksum:</span>
                      <code className="text-slate-300 break-all bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800 block mt-1">
                        a8fbc83d21920ee41892c901192fa2c4d6f88d29c831a2938fd8219ef01a1c92
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TOOLS LAB */}
        {activeTab === 'tools' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="border border-slate-800/60 bg-slate-900/20 rounded-xl p-5 hover:border-slate-700 transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400">[Zero-Loader]</span>
                    <span className="text-[10px] font-mono bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20">FUD / Evasion</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono mb-4">
                    An advanced dynamic PE execution system utilizing indirect unhooked syscalls to bypass AV/EDR runtime instrumentation.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-900 mt-2">
                  <span className="text-[10px] font-mono text-slate-500">Lang: C++ / ASM</span>
                  <button className="flex items-center gap-1 text-[11px] font-mono font-bold bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-md border border-slate-700 text-slate-200 transition">
                    <Download size={11} /> Clone Build
                  </button>
                </div>
              </div>

              <div className="border border-slate-800/60 bg-slate-900/20 rounded-xl p-5 hover:border-slate-700 transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400">[Kernel-Shredder]</span>
                    <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">Ring 0 / Drivers</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-mono mb-4">
                    Windows Kernel execution kit utilizing signed vulnerable drivers (BYOVD) to surgically blind target security telemetry streams.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-900 mt-2">
                  <span className="text-[10px] font-mono text-slate-500">Lang: C / WDK</span>
                  <button className="flex items-center gap-1 text-[11px] font-mono font-bold bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-md border border-slate-700 text-slate-200 transition">
                    <Download size={11} /> Clone Build
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="mt-16 pt-6 border-t border-slate-900 text-center font-mono text-[10px] text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 ZeroOpsX. All rights encrypted.</p>
          <p className="text-emerald-500/40 flex items-center gap-1"><Key size={10} /> PGP: REQUEST FOR RECON</p>
        </footer>

      </div>
    </div>
  );
}