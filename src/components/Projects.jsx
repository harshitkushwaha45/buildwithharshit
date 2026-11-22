import React from 'react';
import { ProjectCard } from './ProjectCard.jsx';
import { PROJECTS } from '../data/portfolioData.js';
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Proof of Work
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Some of the applications I've designed, developed and deployed. Real-world solutions highlighting full-stack execution and AI integration.
            </p>
          </div>

          <a
            href="https://github.com/harshitkushwaha45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline self-start md:self-auto shrink-0"
          >
            <span>View all repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl border border-line bg-surface p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-subtle">
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
              Need a custom application tailored to your business needs?
            </h3>
            <p className="text-sm text-muted mt-1">
              From MVP design to full-stack implementation and AI automation.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-accent text-bg hover:bg-accent-hover transition-colors shadow-subtle shrink-0"
          >
            Start Your Custom Project
          </a>
        </div>

      </div>
    </section>
  );
};
