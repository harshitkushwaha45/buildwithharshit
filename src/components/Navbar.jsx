import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle.jsx';
import { BRAND } from '../data/portfolioData.js';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = ({ onSelectService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link highlight
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-line shadow-sm py-2.5'
          : 'bg-transparent py-3 md:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="BuildWithHarshit Home"
          >
            <div className="w-8 h-8 rounded-lg bg-surface border border-line flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-accent/50 shadow-subtle">
              <span className="font-display font-bold text-sm text-accent tracking-tight">BH</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-ink group-hover:text-accent transition-colors">
                BuildWithHarshit
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted font-medium -mt-0.5">
                Full-Stack & AI Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/60 backdrop-blur-sm border border-line px-3 py-1.5 rounded-full shadow-subtle">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-accent/15 text-accent font-semibold'
                      : 'text-muted hover:text-ink hover:bg-surface'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Hire Me & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs lg:text-sm font-semibold bg-accent text-bg hover:bg-accent-hover transition-all duration-200 shadow-subtle group hover:shadow-glow"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg border border-line bg-surface text-ink hover:text-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-line bg-bg/95 backdrop-blur-xl px-4 pt-4 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent/15 text-accent font-semibold'
                      : 'text-muted hover:text-ink hover:bg-surface'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="pt-3 mt-2 border-t border-line">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-accent text-bg hover:bg-accent-hover transition-colors shadow-subtle"
              >
                <span>Hire Me for Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
