import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/portfolioData.js';
import { 
  Code, 
  Server, 
  Database, 
  BrainCircuit, 
  CloudFog, 
  Wrench, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu 
} from 'lucide-react';

const categoryIcons = {
  "Frontend Development": Code,
  "Backend Development": Server,
  "Databases & Storage": Database,
  "AI & Machine Learning": BrainCircuit,
  "Cloud, DevOps & Hosting": CloudFog,
  "Architecture & Development Tools": Wrench,
};

const quickPillHighlights = [
  "MERN Stack (React, Node, Express, MongoDB)",
  "Tailwind CSS Design System",
  "Python & PyTorch",
  "Gemini API & AI Solutions",
  "Graph-RAG & Neo4j",
  "Socket.IO Real-Time WebSockets",
  "MySQL & Relational Modeling",
  "Vercel & Render Deployment",
];

export const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', ...TECH_CATEGORIES.map(c => c.category)];

  const displayedCategories = activeFilter === 'All'
    ? TECH_CATEGORIES
    : TECH_CATEGORIES.filter(c => c.category === activeFilter);

  return (
    <section id="stack" className="py-10 md:py-14 relative bg-surface/30 border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Engineering Arsenal
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            Technologies I Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            A comprehensive, battle-tested modern stack covering full-stack web applications, real-time streaming architectures, high-performance databases, and production AI integrations.
          </p>
        </div>

        {/* Quick Highlights Marquee / Badge Strip */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl border border-line bg-surface/80 backdrop-blur-sm shadow-subtle">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Primary Core Stack Combinations:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickPillHighlights.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-surface-elevated border border-line text-ink hover:border-accent/40 hover:text-accent transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-accent text-bg border-accent font-semibold shadow-subtle'
                    : 'bg-surface border-line text-muted hover:text-ink hover:border-accent/30'
                }`}
              >
                {tab === 'All' ? `All Categories (${TECH_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)}+ Technologies)` : tab}
              </button>
            );
          })}
        </div>

        {/* 6 Balanced Category Cards Grid (2 rows of 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] || Wrench;
            return (
              <div
                key={cat.category}
                className="rounded-3xl border border-line bg-surface p-7 shadow-subtle hover:border-accent/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-line flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-ink">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-muted">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2 mt-6">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-surface-elevated/70 border border-line/60 hover:border-accent/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-ink">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-muted text-right ml-2">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-line/50 text-[11px] text-muted flex items-center justify-between">
                  <span>{cat.skills.length} Production Tools</span>
                  <span className="text-accent font-semibold font-mono">Verified Stack</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Integration Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-line bg-surface flex flex-col md:flex-row items-center justify-between gap-6 shadow-subtle">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-ink">
                Have a specific technology stack or third-party API requirement?
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-0.5">
                Whether you need Next.js, WebSockets, specialized AI APIs, or custom database modeling, I adapt to your existing infrastructure.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-accent text-bg hover:bg-accent-hover transition-colors shadow-subtle shrink-0"
          >
            Discuss Stack Compatibility
          </a>
        </div>

      </div>
    </section>
  );
};
