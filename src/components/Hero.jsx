import React from 'react';
import { 
  ArrowRight, 
  FolderGit2, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import { SnapshotCard } from './SnapshotCard.jsx';
import { BRAND } from '../data/portfolioData.js';

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 overflow-hidden"
    >
      {/* Background ambient pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Top subtle radial glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-accent/[0.08] blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Clean, confident freelance pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-md mb-4 sm:mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_8px_rgb(var(--color-accent))]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-accent font-mono">
                Available for Freelance Projects
              </span>
            </div>

            {/* Main Headline with Playfair Serif Accent */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight text-ink leading-[1.08] mb-4">
              Turning Ideas Into{' '}
              <span className="font-serif italic font-normal text-accent relative inline-block">
                Powerful Digital
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-accent/50 pointer-events-none"
                  viewBox="0 0 100 8"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 4 Q 12.5 0, 25 4 T 50 4 T 75 4 T 100 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Experiences.
            </h1>

            {/* Role & Bio */}
            <p className="text-lg sm:text-xl font-medium text-ink mb-2 font-display">
              Full-Stack Developer | MERN Stack & AI Solutions
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl mb-5 font-normal">
              I'm <span className="text-ink font-semibold">Harshit Kushwaha</span>. I build production-ready web applications, modern frontend interfaces, and practical AI solutions for startups, businesses, and founders worldwide.
            </p>

            {/* Clean Monospace Tech Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-line/70 bg-surface/50 text-xs font-mono text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                MERN Stack
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-line/70 bg-surface/50 text-xs font-mono text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                AI & LLM Solutions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-line/70 bg-surface/50 text-xs font-mono text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Next.js & Cloud APIs
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
              <button
                onClick={() => scrollTo('contact')}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm bg-accent text-bg hover:bg-accent-hover transition-all duration-200 shadow-glow cursor-pointer group"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm border border-line/80 bg-surface hover:bg-surface-elevated text-ink hover:text-accent transition-all duration-200 shadow-subtle cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-muted group-hover:text-accent" />
                <span>Explore Projects</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              <a
                href={BRAND.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-line/70 bg-surface/50 hover:bg-surface-elevated hover:border-accent/40 text-xs font-medium text-muted hover:text-ink transition-all shadow-subtle"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 text-muted hover:text-accent" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-50" />
              </a>

              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-line/70 bg-surface/50 hover:bg-surface-elevated hover:border-accent/40 text-xs font-medium text-muted hover:text-ink transition-all shadow-subtle"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-50" />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-line/70 bg-surface/50 hover:bg-surface-elevated hover:border-accent/40 text-xs font-medium text-muted hover:text-ink transition-all shadow-subtle"
                aria-label="Email Harshit"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Quick Snapshot Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <SnapshotCard />
          </div>

        </div>
      </div>
    </section>
  );
};
