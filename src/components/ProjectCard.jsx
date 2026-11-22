import React from 'react';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Activity, 
  Cpu, 
  Layers, 
  Terminal, 
  ShieldCheck 
} from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  return (
    <div className="rounded-3xl border border-line bg-surface overflow-hidden shadow-subtle hover:border-accent/40 hover:shadow-card transition-all duration-300 flex flex-col">
      
      {/* Visual Header / Mockup Preview */}
      <div className="relative bg-surface-elevated border-b border-line p-6 sm:p-7 overflow-hidden">
        {/* Subtle decorative glow */}
        <div 
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: project.uiPreview.accent }}
        />

        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 text-xs font-mono text-muted/70">{project.category}</span>
          </div>

          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-surface border border-line text-ink">
            {project.badge}
          </span>
        </div>

        {/* Interactive / Visual Representation Box */}
        <div className="rounded-2xl border border-line/80 bg-surface/90 p-4 relative z-10 shadow-inner">
          <div className="flex items-center justify-between text-xs text-muted mb-3 pb-2 border-b border-line/60">
            <div className="flex items-center gap-1.5 font-mono">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>preview/{project.id}</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold">
              Live Architecture
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {Object.entries(project.stats).map(([label, val]) => (
              <div key={label} className="p-2 rounded-xl bg-surface-elevated/70 border border-line/50">
                <span className="block text-[10px] uppercase font-semibold text-muted tracking-wider">
                  {label}
                </span>
                <span className="text-xs font-medium text-ink truncate block mt-0.5">
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Description */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-ink hover:text-accent transition-colors tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs font-mono font-medium text-accent">
              {project.category}
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted leading-relaxed mb-5 font-normal">
            {project.description}
          </p>

          {/* Problem Solved Callout */}
          {project.problemSolved && (
            <div className="mb-6 p-4 rounded-2xl bg-surface-elevated/70 border border-line">
              <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mb-1">
                The Problem It Solves:
              </span>
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          )}

          {/* Key Features */}
          <div className="mb-6">
            <span className="block text-xs uppercase font-semibold text-muted tracking-wider mb-3">
              Key Capabilities & Engineering:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-ink leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency Note for Mock Interview */}
          {project.transparencyNote && (
            <div className="mb-6 p-4 rounded-2xl border border-line bg-surface-elevated/90 flex items-start gap-3 shadow-sm">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted leading-relaxed">
                <span className="text-ink font-semibold">Architecture Notice: </span>
                {project.transparencyNote}
              </p>
            </div>
          )}
        </div>

        {/* Footer Area: Technologies & Direct Actions */}
        <div className="pt-6 border-t border-line">
          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-surface-elevated border border-line text-xs font-medium text-muted hover:text-ink hover:border-accent/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons: GitHub & Live Demo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-accent text-bg hover:bg-accent-hover transition-all duration-200 shadow-subtle hover:shadow-glow group"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold border border-line bg-surface-elevated hover:bg-line text-ink hover:text-accent transition-colors shadow-subtle"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
