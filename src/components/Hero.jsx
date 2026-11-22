import React from 'react';
import { 
  ArrowRight, 
  FolderGit2, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown 
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
      className="relative pt-20 pb-8 md:pt-24 md:pb-10 overflow-hidden"
    >
      {/* Background ambient pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Top subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Main Pitch & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md shadow-subtle mb-3.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-accent">
                Available for Freelance Projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl tracking-tight text-ink leading-[1.12] mb-3">
              Turning Ideas Into{' '}
              <span className="font-serif italic font-normal text-accent">
                Powerful Digital
              </span>{' '}
              Experiences.
            </h1>

            {/* Professional Description */}
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl mb-4 font-normal">
              I'm <span className="text-ink font-semibold">Harshit Kushwaha</span>, an independent Full-Stack Developer specializing in <span className="text-ink font-medium">MERN Stack Development</span>, custom web applications, and practical <span className="text-ink font-medium">AI solutions</span>. I help startups and businesses turn early concepts into fast, scalable, and reliable digital products—delivered on time with direct communication.
            </p>

            {/* Core Value Quick Badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 w-full mb-5 pt-0">
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Direct 1-on-1 Access</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Production-Grade Code</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Transparent Milestones</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-5">
              <button
                onClick={() => scrollTo('contact')}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full font-display font-semibold text-xs sm:text-sm bg-accent text-bg hover:bg-accent-hover transition-all duration-200 shadow-subtle hover:shadow-glow group"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full font-display font-semibold text-xs sm:text-sm border border-line bg-surface hover:bg-surface-elevated text-ink hover:text-accent transition-all duration-200 shadow-subtle"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-muted group-hover:text-accent" />
                <span>Explore My Work</span>
              </button>
            </div>

            {/* Social Icons & Verified Badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-3 border-t border-line w-full">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-muted">
                Connect Directly:
              </span>
              
              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  href={BRAND.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-line bg-surface hover:bg-surface-elevated text-xs font-medium text-ink hover:text-accent transition-colors shadow-subtle"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-line bg-surface hover:bg-surface-elevated text-xs font-medium text-ink hover:text-accent transition-colors shadow-subtle"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-line bg-surface hover:bg-surface-elevated text-xs font-medium text-ink hover:text-accent transition-colors shadow-subtle"
                  aria-label="Email Harshit"
                >
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Snapshot Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <SnapshotCard />
          </div>

        </div>
      </div>
    </section>
  );
};
