<<<<<<< HEAD
# BuildWithHarshit — Freelance Portfolio & Client Acquisition Platform

Official personal freelancing portfolio website for **Harshit Kushwaha** (Brand: **BuildWithHarshit**).

- **Primary Domain:** `https://buildwithharshit.online`
- **Secondary Domain (Redirect):** `https://buildwithharshit.info`
- **Owner:** Harshit Kushwaha
- **Identity:** Full-Stack Developer | MERN Stack Developer | AI Solutions Developer
- **Target Audience:** Startups, businesses, agencies, and entrepreneurs looking for high-quality MERN & AI web development.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS with custom Dark / Light theme variables
- **Icons:** Lucide React
- **Animations:** Framer Motion & CSS transitions
- **Contact Handling:** EmailJS client integration with automatic structured mailto fallback
- **AI-Powered Mock Interview Platform:** TensorFlow.js, face-api.js, Chart.js — Live: [ai-mock-interview-platform-1-ofb2.onrender.com](https://ai-mock-interview-platform-1-ofb2.onrender.com/)

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Custom Domain & Vercel Deployment

### 1. Deploying to Vercel
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of BuildWithHarshit portfolio"
   git remote add origin https://github.com/harshitkushwaha45/<repo-name>.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**.

### 2. Configuring Custom Domains on Vercel
1. In your Vercel Project Dashboard, go to **Settings** -> **Domains**.
2. Add your primary domain:
   - `buildwithharshit.online`
   - Vercel will recommend adding `www.buildwithharshit.online` (set `www` to redirect to `buildwithharshit.online`).
3. Add your secondary domain:
   - `buildwithharshit.info`
   - Set it to redirect to `buildwithharshit.online` (or use the built-in rules configured in `vercel.json`).
4. Update your domain DNS records at your domain registrar (e.g., Hostinger, Namecheap, GoDaddy):
   - **A Record**: `@` points to `76.76.21.21` (Vercel IP)
   - **CNAME Record**: `www` points to `cname.vercel-dns.com`

---

## 📬 Contact Form Configuration (EmailJS)

The contact inquiry form is built to work immediately out-of-the-box:
- **With EmailJS:** Add your credentials in Vercel project environment variables:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- **Without EmailJS (Default Fallback):** The form generates a formatted email directly addressed to `mauryahaharshit@gmail.com` with one-click email application opening and clipboard copy, ensuring you never miss a client message.
=======
# buildwithharshit
>>>>>>> origin/main
