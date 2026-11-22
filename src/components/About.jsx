import React from 'react';
import { 
  Check, 
  Terminal, 
  Code2, 
  Laptop, 
  Target, 
  ShieldCheck, 
  Flame, 
  ArrowRight 
} from 'lucide-react';
import { BRAND } from '../data/portfolioData.js';

export const About = () => {
  const pillars = [
    {
      title: "Understanding Requirements",
      desc: "Deep analysis before writing any code to ensure the solution aligns with your business objectives.",
      icon: Target,
    },
    {
      title: "Clean, Maintainable Code",
      desc: "Structured architectures, modern best practices, and thorough documentation for future scalability.",
      icon: Code2,
    },
    {
      title: "Solving Real Problems",
      desc: "Focusing on delivering functional outcomes rather than unnecessary technical complexity.",
      icon: ShieldCheck,
    },
    {
      title: "Delivering Functional Apps",
      desc: "Ship production-ready, fully deployed applications ready to serve actual users on day one.",
      icon: Laptop,
    },
  ];

  const quickTechList = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Gemini API",
    "Graph-RAG",
    "Socket.IO",
    "MySQL",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="py-10 md:py-14 relative bg-surface/40 border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              About The Developer
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            A Little About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-muted leading-relaxed">
            <p className="text-ink font-medium">
              I'm <span className="text-accent font-semibold">{BRAND.owner}</span>, an independent Full-Stack Developer with hands-on experience building complete, production-ready web applications from concept to deployment.
            </p>
            <p>
              I work across the full development stack—engineering responsive user interfaces with modern React, structuring resilient backend systems with Node.js and Express, and designing reliable databases using MongoDB, MySQL, and graph technologies.
            </p>
            <p>
              My interest in AI centers on practical, high-value integration. Rather than treating AI as a buzzword, I focus on integrating machine learning, LLM APIs, and knowledge graphs where they genuinely improve products—such as intelligent document parsing, conversational workflows, and context retrieval.
            </p>
            <p>
              My development philosophy is straightforward: understand your business requirements deeply before writing code, write clean and maintainable architecture that scales without headache, and deliver functional software on realistic, agreed milestones.
            </p>
            <p>
              I partner directly with startups, growing businesses, and individuals who want a dedicated technical partner they can communicate with openly.
            </p>

            {/* Compact Technology Overview */}
            <div className="pt-6 border-t border-line">
              <span className="block text-xs uppercase font-semibold text-muted tracking-wider mb-3">
                Core Technologies Overview:
              </span>
              <div className="flex flex-wrap gap-2">
                {quickTechList.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-line text-ink shadow-subtle"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <span>Have a project in mind? Let's talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Development Approach Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl border border-line bg-surface hover:border-accent/40 transition-all duration-200 shadow-subtle"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-surface-elevated border border-line flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-ink mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
