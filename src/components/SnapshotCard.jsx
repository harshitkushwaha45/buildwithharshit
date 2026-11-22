import React, { useState } from 'react';
import { 
  Terminal,
  Globe2, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight,
  MapPin
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

  const specializations = [
    'Full-Stack Web Development',
    'AI-Powered Applications',
    'Backend & API Development',
  ];

  const techGroups = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      category: 'AI & Tools',
      skills: ['Python', 'Gemini API', 'Git', 'Docker'],
    },
  ];

  const services = [
    'Custom Web Applications',
    'AI Integration & Automation',
    'Admin Dashboards',
    'Real-Time Applications',
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/20 to-accent/5 blur-xl opacity-40 -z-10 pointer-events-none" />

      {/* Main Container with refined spacing and borders */}
      <div className="rounded-3xl border border-line bg-surface/90 backdrop-blur-md p-4.5 sm:p-5 shadow-card">
        
        {/* 1. HEADER */}
        <div className="pb-3 border-b border-line">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-5.5 h-5.5 rounded-md bg-surface-elevated border border-line flex items-center justify-center text-accent">
                <Terminal className="w-3 h-3" />
              </div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-muted">
                DEVELOPER PROFILE
              </span>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </span>
              <span className="text-[9px] font-semibold tracking-wider uppercase text-accent whitespace-nowrap">
                Available for Select Projects
              </span>
            </div>
          </div>

          <h2 className="font-display font-bold text-lg sm:text-xl text-ink tracking-tight">
            Harshit Kushwaha
          </h2>
          <p className="text-xs text-muted font-normal mt-0.5">
            Full-Stack Developer | MERN Stack & AI Applications
          </p>
        </div>

        {/* 2. SPECIALIZATION */}
        <div className="py-2.5 border-b border-line">
          <span className="block text-[10px] uppercase font-semibold tracking-wider text-muted mb-1.5">
            Specialization
          </span>
          <div className="flex flex-wrap gap-1.5">
            {specializations.map((spec) => (
              <span
                key={spec}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-surface-elevated border border-line text-[11px] font-medium text-ink shadow-subtle"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>{spec}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3. TECHNOLOGY STACK (Organized in 4 Equal-Height Compact Categories) */}
        <div className="py-2.5 border-b border-line">
          <span className="block text-[10px] uppercase font-semibold tracking-wider text-muted mb-2">
            Technology Stack
          </span>
          <div className="grid grid-cols-2 gap-2">
            {techGroups.map((group) => (
              <div
                key={group.category}
                className="p-2 rounded-xl bg-surface-elevated/70 border border-line flex flex-col justify-between"
              >
                <span className="block text-[9px] uppercase font-semibold text-accent tracking-wider mb-1">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-1.5 py-0.5 rounded-md bg-surface border border-line text-[10px] font-medium text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SERVICES */}
        <div className="py-2.5 border-b border-line">
          <span className="block text-[10px] uppercase font-semibold tracking-wider text-muted mb-1.5">
            Services
          </span>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-1.5 text-xs text-ink font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="truncate">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. WORK DETAILS */}
        <div className="py-2.5 border-b border-line">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-muted">
              <Globe2 className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>
                <strong className="text-ink font-medium">Mode:</strong> Remote | Worldwide
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-muted">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>
                <strong className="text-ink font-medium">Status:</strong> Open to Select Projects
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-muted">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>
                <strong className="text-ink font-medium">Location:</strong> India
              </span>
            </div>
          </div>
        </div>

        {/* 6. CONTACT AREA */}
        <div className="pt-3 space-y-2">
          <div className="flex items-center justify-between p-2 rounded-xl bg-surface-elevated border border-line">
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-line bg-surface hover:bg-line text-xs font-medium text-ink hover:text-accent transition-colors shrink-0 cursor-pointer shadow-subtle"
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
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </div>
  );
};
