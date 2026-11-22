import React from 'react';
import { 
  Layers, 
  Sparkles, 
  Layout, 
  Database, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData.js';

const iconMap = {
  Layers: Layers,
  Sparkles: Sparkles,
  Layout: Layout,
  Database: Database,
};

export const Services = ({ onSelectService }) => {
  const handleDiscuss = (service) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Core Capabilities
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            What I Can Build For You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Practical development solutions designed to help businesses launch, improve and scale their digital products.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Layers;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl border border-line bg-surface p-7 sm:p-9 shadow-subtle hover:border-accent/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Category Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-line flex items-center justify-center text-accent group-hover:scale-105 group-hover:bg-accent/10 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-muted/60 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-1.5 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  {service.outcomeSummary && (
                    <span className="inline-block text-xs font-semibold text-accent mb-3">
                      {service.outcomeSummary}
                    </span>
                  )}
                  <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-ink">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* What You Receive Callout */}
                  {service.clientReceives && (
                    <div className="mb-6 p-3.5 rounded-2xl bg-surface-elevated/70 border border-line text-xs">
                      <span className="text-ink font-semibold block mb-1">What You Receive:</span>
                      <span className="text-muted leading-relaxed">{service.clientReceives}</span>
                    </div>
                  )}
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="pt-6 border-t border-line flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-surface-elevated border border-line text-xs font-medium text-muted group-hover:text-ink transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleDiscuss(service)}
                    type="button"
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full text-xs sm:text-sm font-semibold border border-line bg-surface-elevated hover:bg-accent hover:text-bg hover:border-accent text-ink transition-all duration-200 group/btn"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
