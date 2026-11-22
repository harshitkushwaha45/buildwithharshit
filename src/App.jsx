import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { Services } from './components/Services.jsx';
import { About } from './components/About.jsx';
import { Projects } from './components/Projects.jsx';
import { TechStack } from './components/TechStack.jsx';
import { Process } from './components/Process.jsx';
import { WhyMe } from './components/WhyMe.jsx';
import { Contact } from './components/Contact.jsx';
import { FAQ } from './components/FAQ.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink selection:bg-accent/20 selection:text-accent">
      {/* Sticky Header */}
      <Navbar onSelectService={handleSelectService} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Services onSelectService={handleSelectService} />
        <About />
        <Projects />
        <TechStack />
        <Process />
        <WhyMe />
        <Contact prefilledService={selectedService} />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
