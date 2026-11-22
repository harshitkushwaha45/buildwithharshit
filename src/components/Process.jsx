import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData.js';
import { Check, ArrowRight } from 'lucide-react';

export const Process = () => {
  return (
    <section id="process" className="py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Structured Workflow
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            How I Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            A transparent four-step process built around clear communication, rapid iteration, and verifiable outcomes.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Horizontal Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-line -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="group rounded-3xl border border-line bg-surface p-7 shadow-subtle hover:border-accent/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-line flex items-center justify-center font-display font-extrabold text-base text-accent group-hover:scale-105 group-hover:bg-accent/10 transition-all shadow-subtle">
                      {step.number}
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-muted">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl text-ink mb-1 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <span className="block text-xs font-medium text-accent mb-3">
                    {step.subtitle}
                  </span>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-line">
                  <span className="block text-[11px] uppercase font-semibold text-muted tracking-wider mb-2">
                    Key Outcomes:
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="text-xs font-medium text-ink">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Milestone Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl border border-line bg-surface-elevated/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            <p className="text-xs sm:text-sm text-muted">
              <span className="text-ink font-semibold">Milestone Guarantee: </span>
              Every step includes staging previews and code walkthroughs before advancing.
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold text-accent hover:underline flex items-center gap-1 shrink-0"
          >
            Discuss timeline & budget <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
