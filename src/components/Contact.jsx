import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  Globe2, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { BRAND } from '../data/portfolioData.js';
import { sendInquiry } from '../utils/email.js';

const PROJECT_TYPES = [
  "Full-Stack Web Application",
  "React / Frontend Website",
  "AI Integration / AI Tool",
  "Backend API & Database",
  "Bug Fixing & Performance Optimization",
  "Other Custom Requirement",
];

const BUDGET_OPTIONS = [
  "Under $300 / < ₹25,000 (Small Scope / Fixes / Landing Page)",
  "$300 – $600 / ₹25,000 – ₹50,000 (Frontend / Small MVP)",
  "$600 – $1,200 / ₹50,000 – ₹100,000 (Full-Stack MVP / Web App)",
  "$1,200+ / ₹100,000+ (Custom Web Application / AI Solution)",
  "Flexible / Open to Discussion",
];

export const Contact = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    budget: '$300 – $600 / ₹25,000 – ₹50,000 (Frontend / Small MVP)',
    description: '',
    hpField: '', // Honeypot field for invisible bot protection
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    method: null,
    mailtoUrl: null,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  // Optional WhatsApp support
  const rawWhatsApp = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WHATSAPP_NUMBER) || BRAND.whatsappNumber || '';
  const sanitizedWhatsApp = rawWhatsApp.replace(/\D/g, '');
  const hasValidWhatsApp = sanitizedWhatsApp.length >= 10;

  useEffect(() => {
    if (prefilledService) {
      if (prefilledService.includes('Full-Stack')) {
        setFormData(prev => ({ ...prev, projectType: 'Full-Stack Web Application' }));
      } else if (prefilledService.includes('AI')) {
        setFormData(prev => ({ ...prev, projectType: 'AI Integration / AI Tool' }));
      } else if (prefilledService.includes('Frontend')) {
        setFormData(prev => ({ ...prev, projectType: 'React / Frontend Website' }));
      } else if (prefilledService.includes('Backend')) {
        setFormData(prev => ({ ...prev, projectType: 'Backend API & Database' }));
      }
    }
  }, [prefilledService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check - silent exit if bot fills hidden field
    if (formData.hpField) {
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        method: 'spam_blocked',
        mailtoUrl: null,
      });
      return;
    }

    // Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedDesc = formData.description.trim();

    if (!trimmedName || !trimmedEmail || !trimmedDesc) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please complete your name, email, and project description.",
        method: null,
        mailtoUrl: null,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please enter a valid email address so I can get back to you.",
        method: null,
        mailtoUrl: null,
      });
      return;
    }

    if (trimmedDesc.length < 10) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please describe your project in at least a few words so I understand your requirements.",
        method: null,
        mailtoUrl: null,
      });
      return;
    }

    setStatus({ submitting: true, error: null, submitted: false, method: null, mailtoUrl: null });

    try {
      const result = await sendInquiry({
        name: trimmedName,
        email: trimmedEmail,
        projectType: formData.projectType,
        budget: formData.budget,
        description: trimmedDesc,
      });

      if (result.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          method: result.method,
          mailtoUrl: result.mailtoUrl,
        });

        if (result.mailtoUrl) {
          window.open(result.mailtoUrl, '_blank');
        }
      } else {
        throw new Error("Submission could not be completed.");
      }
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Automated submission encountered an issue. Please click 'Send Direct Email' below to contact me directly.",
        method: null,
        mailtoUrl: null,
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Full-Stack Web Application',
      budget: '$300 – $600 / ₹25,000 – ₹50,000 (Frontend / Small MVP)',
      description: '',
      hpField: '',
    });
    setStatus({
      submitting: false,
      submitted: false,
      error: null,
      method: null,
      mailtoUrl: null,
    });
  };

  return (
    <section id="contact" className="py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Let's Build Together
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Whether you're launching a new idea, improving an existing application or looking to integrate AI into your business, let's discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9 shadow-card">
              
              <div className="mb-6 pb-6 border-b border-line flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-ink">
                    Project Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-0.5">
                    Share your requirements for a free scope and timeline estimate.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Replies within 24h</span>
                </div>
              </div>

              {status.submitted ? (
                /* Success State */
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-2xl text-ink">
                      Inquiry Ready & Dispatched!
                    </h4>
                    <p className="text-sm text-muted max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="text-ink font-semibold">{formData.name}</span>! Your project details have been recorded.
                      {status.mailtoUrl ? (
                        <span className="block mt-2">
                          Your default email application was also triggered. If it did not open, you can review or dispatch your inquiry directly below:
                        </span>
                      ) : (
                        <span className="block mt-2">
                          I will review your specifications and get back to you at <span className="text-accent font-semibold">{formData.email}</span> within 24 hours.
                        </span>
                      )}
                    </p>
                  </div>

                  {status.mailtoUrl && (
                    <div className="pt-2 flex flex-wrap justify-center gap-3">
                      <a
                        href={status.mailtoUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-accent text-bg hover:bg-accent-hover transition-colors shadow-subtle"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open in Email App</span>
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        type="button"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-line bg-surface-elevated text-ink hover:text-accent transition-colors"
                      >
                        {copiedEmail ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedEmail ? "Email Copied" : "Copy Harshit's Email"}</span>
                      </button>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      type="button"
                      className="text-xs text-muted hover:text-accent underline font-medium"
                    >
                      Send another project inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Invisible Honeypot field for bot spam prevention */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hpField">Do not fill this out</label>
                    <input
                      type="text"
                      id="hpField"
                      name="hpField"
                      tabIndex="-1"
                      autoComplete="off"
                      value={formData.hpField}
                      onChange={handleChange}
                    />
                  </div>

                  {status.error && (
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-2xl border border-line bg-surface-elevated/70 text-ink text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-2xl border border-line bg-surface-elevated/70 text-ink text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                        Project Type <span className="text-accent">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-line bg-surface-elevated/70 text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-surface text-ink">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Estimated Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                        Estimated Budget <span className="text-accent">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-line bg-surface-elevated/70 text-ink text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b} className="bg-surface text-ink">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                      Project Description <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell me about your project goals, required features, timeline, and current state..."
                      className="w-full px-4 py-3 rounded-2xl border border-line bg-surface-elevated/70 text-ink text-sm placeholder:text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-display font-semibold text-sm bg-accent text-bg hover:bg-accent-hover disabled:opacity-50 transition-all duration-200 shadow-subtle hover:shadow-glow group"
                    >
                      {status.submitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-muted text-center">
                    Your inquiry goes directly to Harshit Kushwaha. No spam or unsolicited promotions, ever.
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* RIGHT: Direct Verified Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Verified Email Card */}
            <div className="rounded-3xl border border-line bg-surface p-7 shadow-subtle">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-semibold text-muted tracking-wider">
                  Direct Verified Email
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-accent">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Primary Inbox
                </span>
              </div>

              <a
                href={`mailto:${BRAND.email}`}
                className="font-mono text-base sm:text-lg text-ink font-semibold hover:text-accent transition-colors break-all block mb-4"
              >
                {BRAND.email}
              </a>

              <div className="flex items-center gap-2.5">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-accent text-bg hover:bg-accent-hover transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-line bg-surface-elevated text-ink hover:text-accent transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="rounded-3xl border border-line bg-surface p-7 shadow-subtle space-y-4">
              <span className="text-xs uppercase font-semibold text-muted tracking-wider block">
                Professional Profiles
              </span>

              {/* LinkedIn */}
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-elevated border border-line hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-line flex items-center justify-center text-[#0A66C2]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-semibold text-sm text-ink group-hover:text-accent transition-colors block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs text-muted">
                      in/harshitkushwaha45
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={BRAND.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-elevated border border-line hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-line flex items-center justify-center text-ink">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display font-semibold text-sm text-ink group-hover:text-accent transition-colors block">
                      GitHub Repositories
                    </span>
                    <span className="text-xs text-muted">
                      github.com/harshitkushwaha45
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
              </a>

              {/* Optional WhatsApp Button (rendered only if valid WhatsApp number configured) */}
              {hasValidWhatsApp && (
                <a
                  href={`https://wa.me/${sanitizedWhatsApp}?text=${encodeURIComponent("Hi Harshit, I'm reaching out from BuildWithHarshit regarding a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-surface border border-line flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-semibold text-sm text-ink group-hover:text-emerald-400 transition-colors block">
                        Direct WhatsApp Chat
                      </span>
                      <span className="text-xs text-muted">
                        Quick questions & project inquiries
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-emerald-400 transition-colors" />
                </a>
              )}
            </div>

            {/* Remote Availability Card */}
            <div className="rounded-3xl border border-line bg-surface p-7 shadow-subtle">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-ink">
                    Worldwide Client Service
                  </h4>
                  <span className="text-xs text-muted">Remote Availability</span>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Based in India, collaborating seamlessly across US, European, Asian, and Indian timezones with asynchronous updates and live video syncs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
