import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Layers, 
  Terminal, 
  Globe2, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { BRAND } from '../data/portfolioData.js';

export const SnapshotCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const snapshotItems = [
    {
      key: 'role',
      icon: Code2,
      label: 'Role',
      badge: 'Full-Stack',
      value: 'Full-Stack Developer',
      highlight: false,
    },
    {
      key: 'specialization',
      icon: Sparkles,
      label: 'Specialization',
      badge: 'Core Focus',
      value: 'MERN & AI Solutions',
      highlight: false,
    },
    {
      key: 'stack',
      icon: Layers,
      label: 'Core Stack',
      badge: 'Production',
      value: 'React · Node · Python · Mongo',
      highlight: false,
    },
    {
      key: 'services',
      icon: Terminal,
      label: 'Services',
      badge: 'End-to-End',
      value: 'Web Apps, APIs & AI Tools',
      highlight: false,
    },
    {
      key: 'workmode',
      icon: Globe2,
      label: 'Work Mode',
      badge: 'Worldwide',
      value: 'Remote / IST & Global',
      highlight: false,
    },
    {
      key: 'availability',
      icon: CheckCircle2,
      label: 'Availability',
      badge: 'Open for Hire',
      value: 'Available for Projects',
      highlight: true,
    },
  ];

  return (
    <div className="group relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow matching reference site */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl transition-all duration-700 group-hover:bg-accent/25" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-all duration-700 group-hover:bg-accent/20" />

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-line/80 bg-surface/85 p-5 sm:p-6 backdrop-blur-xl shadow-2xl shadow-black/5 hover:border-accent/40 hover:shadow-accent/10 transition-all duration-500">
        
        {/* Subtle top border gradient accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        {/* Card Header */}
        <div className="mb-4 sm:mb-5 pb-3.5 sm:pb-4 border-b border-line/60 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-accent font-mono">
                QUICK SNAPSHOT
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink font-display">
              Developer Profile
            </h3>
            <p className="text-xs text-muted mt-0.5">
              Freelance engineering & technical capabilities.
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-line/70 bg-surface-elevated text-accent shadow-sm shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
        </div>

        {/* 6 Elegant Snapshot Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {snapshotItems.map((item) => {
            const Icon = item.icon;
            const isHighlight = item.highlight;
            return (
              <div
                key={item.key}
                className={`group/card relative flex flex-col justify-between overflow-hidden rounded-xl border p-3 sm:rounded-2xl sm:p-3.5 transition-all duration-300 hover:-translate-y-0.5 ${
                  isHighlight
                    ? 'border-accent/40 bg-gradient-to-br from-accent/[0.08] via-surface/60 to-surface hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10'
                    : 'border-line/70 bg-surface-elevated/40 hover:border-accent/35 hover:bg-surface-elevated hover:shadow-md'
                }`}
              >
                {/* Header: Icon + Label + Badge */}
                <div className="relative mb-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all ${
                        isHighlight
                          ? 'border-accent/40 bg-accent/15 text-accent'
                          : 'border-line/80 bg-surface text-muted group-hover/card:text-accent group-hover/card:border-accent/30'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                  </div>

                  {item.badge && (
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[9.5px] font-mono font-medium ${
                        isHighlight
                          ? 'border border-accent/30 bg-accent/20 text-accent'
                          : 'border border-line/60 bg-surface text-muted'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Value */}
                <div className="relative">
                  <span
                    className={`text-xs sm:text-[13px] font-semibold leading-tight block ${
                      isHighlight ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Footer: Direct Email with Copy & Project CTA */}
        <div className="mt-4 pt-3.5 border-t border-line/60 space-y-2.5">
          <div className="flex items-center justify-between p-2 rounded-xl bg-surface-elevated border border-line">
            <div className="truncate mr-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-mono text-ink truncate block">
                {BRAND.email}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-line bg-surface hover:bg-line text-xs font-medium text-ink hover:text-accent transition-colors shrink-0 cursor-pointer shadow-subtle"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-accent" />
                  <span className="text-accent font-semibold text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-muted" />
                  <span className="text-xs">Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl font-display font-semibold text-xs sm:text-sm bg-accent text-bg hover:bg-accent-hover transition-all duration-200 shadow-subtle hover:shadow-glow group cursor-pointer"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </div>
  );
};
