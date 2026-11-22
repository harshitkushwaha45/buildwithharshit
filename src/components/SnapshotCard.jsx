import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Layers, 
  Globe2, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal, 
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

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background glow behind card */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/20 to-accent/5 blur-xl opacity-50 -z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="rounded-3xl border border-line bg-surface/90 backdrop-blur-md p-4 sm:p-5 lg:p-6 shadow-card">
        
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-line">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-surface-elevated border border-line flex items-center justify-center text-accent">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-muted block">
                Quick Snapshot
              </span>
              <h3 className="font-display font-bold text-sm sm:text-base text-ink">
                Developer Profile
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            <span className="text-[10px] font-semibold text-accent tracking-wide uppercase">
              Online
            </span>
          </div>
        </div>

        {/* Snapshot Rows */}
        <div className="space-y-2.5 py-3.5 border-b border-line">
          
          {/* Row 1: Role */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <Code2 className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Role</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-ink text-right">
              Full-Stack Developer
            </span>
          </div>

          {/* Row 2: Specialization */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Specialization</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-ink text-right">
              MERN Stack & AI Solutions
            </span>
          </div>

          {/* Row 3: Technologies */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <Layers className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Technologies</span>
            </div>
            <div className="flex flex-wrap justify-end gap-1 max-w-[240px]">
              {['React', 'Node.js', 'MongoDB', 'Python', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-surface-elevated border border-line text-[10px] font-medium text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Row 4: Services */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <Terminal className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Services</span>
            </div>
            <span className="text-xs sm:text-sm font-medium text-ink text-right">
              Web Apps, AI Integration, Dashboards
            </span>
          </div>

          {/* Row 5: Work Mode */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <Globe2 className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Work Mode</span>
            </div>
            <span className="text-xs sm:text-sm font-medium text-ink text-right">
              Remote / Worldwide
            </span>
          </div>

          {/* Row 6: Availability */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Availability</span>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-accent/15 text-accent border border-accent/30">
              Open to Select Projects
            </span>
          </div>
        </div>

        {/* Card Footer: Quick Contact / Copy Email */}
        <div className="pt-3">
          <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-surface-elevated border border-line">
            <div className="truncate mr-2">
              <span className="block text-[9px] uppercase font-semibold text-muted tracking-wider">
                Direct Contact
              </span>
              <span className="text-xs font-mono text-ink truncate block">
                {BRAND.email}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-line bg-surface hover:bg-line text-xs font-medium text-ink hover:text-accent transition-colors shrink-0"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-accent" />
                  <span className="text-accent font-semibold text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-muted" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-xs text-muted">
            <span className="text-[11px]">Location: {BRAND.location}</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-accent font-medium hover:underline text-[11px]"
            >
              Start a project <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
