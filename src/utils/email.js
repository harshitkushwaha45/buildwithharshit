import emailjs from '@emailjs/browser';
import { BRAND } from '../data/portfolioData.js';

/**
 * Sends inquiry via EmailJS if credentials are provided in env,
 * or prepares structured mailto data as a bulletproof fallback.
 */
export async function sendInquiry(formData) {
  const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : {};
  const serviceId = env.VITE_EMAILJS_SERVICE_ID;
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

  const payload = {
    from_name: formData.name,
    reply_to: formData.email,
    project_type: formData.projectType,
    budget: formData.budget,
    message: formData.description,
    to_name: BRAND.owner,
    to_email: BRAND.email,
    submitted_at: new Date().toISOString(),
  };

  if (serviceId && templateId && publicKey) {
    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        payload,
        publicKey
      );
      return { success: true, method: 'emailjs', response };
    } catch (error) {
      console.warn("EmailJS submission encountered error, falling back to direct mailto:", error);
      // Fall through to fallback
    }
  }

  // Graceful fallback: construct mailto URL with encoded subject and body
  const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} [${formData.budget}] - from ${formData.name}`);
  const body = encodeURIComponent(
`Hi Harshit,

I'm reaching out from BuildWithHarshit regarding a potential project.

--- PROJECT DETAILS ---
Client Name: ${formData.name}
Client Email: ${formData.email}
Project Type: ${formData.projectType}
Estimated Budget: ${formData.budget}

--- DESCRIPTION ---
${formData.description}

Looking forward to hearing from you!
`
  );

  const mailtoUrl = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;

  return {
    success: true,
    method: 'mailto_fallback',
    mailtoUrl,
    summary: {
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      budget: formData.budget,
      description: formData.description,
    }
  };
}
