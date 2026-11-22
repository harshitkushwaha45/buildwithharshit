import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/portfolioData.js';
import { 
  MessageSquare, 
  Cpu, 
  Smartphone, 
  Code, 
  CheckCircle, 
  TrendingUp, 
  ShieldAlert 
} from 'lucide-react';

const iconMap = {
  MessageSquare: MessageSquare,
  Cpu: Cpu,
  Smartphone: Smartphone,
  Code: Code,
  CheckCircle: CheckCircle,
  TrendingUp: TrendingUp,
};

export const WhyMe = () => {
  return (
    <section className="py-10 md:py-14 relative bg-surface/30 border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              The Freelancer Advantage
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            Why Work With Me?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            I work as an independent developer who personally handles every line of code, ensuring direct alignment, unmatched agility, and zero agency overhead.
          </p>
        </div>

        {/* 6 Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPOSITIONS.map((prop) => {
            const Icon = iconMap[prop.icon] || CheckCircle;
            return (
              <div
                key={prop.title}
                className="group p-7 rounded-3xl border border-line bg-surface hover:border-accent/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-line flex items-center justify-center text-accent mb-6 group-hover:scale-105 group-hover:bg-accent/10 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-ink mb-2 group-hover:text-accent transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 text-[11px] text-accent font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Personal Commitment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaboration Standards Banner */}
        <div className="mt-14 rounded-3xl border border-line bg-surface p-7 sm:p-9 shadow-subtle">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
              Professional Collaboration
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
              My Commitments to Every Client
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-2">
              Clear expectations, honest timelines, and reliable execution whether you are in India, the US, Europe, or anywhere worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-surface-elevated border border-line/70">
              <span className="text-accent font-semibold text-xs block mb-1">01. Direct Communication</span>
              <p className="text-xs text-muted">You speak directly to me via Email, Slack, or Google Meet with zero middleman filtering.</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-elevated border border-line/70">
              <span className="text-accent font-semibold text-xs block mb-1">02. Live Staging Links</span>
              <p className="text-xs text-muted">You test working software on real cloud environments throughout the development cycle.</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-elevated border border-line/70">
              <span className="text-accent font-semibold text-xs block mb-1">03. 100% Code Ownership</span>
              <p className="text-xs text-muted">You own all intellectual property, repository commits, and assets from day one.</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-elevated border border-line/70">
              <span className="text-accent font-semibold text-xs block mb-1">04. Post-Launch Support</span>
              <p className="text-xs text-muted">Agreed handover support to ensure your production launch runs smoothly without surprises.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
