import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { BRAND } from '../data/portfolioData.js';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-line bg-surface/70 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-line">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-line flex items-center justify-center shadow-subtle">
                <span className="font-display font-bold text-sm text-accent">BH</span>
              </div>
              <span className="font-display font-bold text-lg text-ink">
                {BRAND.name}
              </span>
            </div>
            
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Building practical digital solutions with modern web technologies and AI. Available for remote projects worldwide.
            </p>

            <div className="pt-2">
              <span className="text-xs text-muted block">
                Domains: <span className="text-ink font-mono">{BRAND.domain}</span> • <span className="text-muted font-mono">{BRAND.secondaryDomain}</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase font-semibold text-muted tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase font-semibold text-muted tracking-wider block">
              Connect Directly
            </span>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm">
              <a
                href={BRAND.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>{BRAND.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted text-center sm:text-left">
            © 2026 {BRAND.name}. All rights reserved. Crafted for high-performance client delivery.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-line bg-surface hover:bg-surface-elevated text-xs font-medium text-muted hover:text-accent transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
