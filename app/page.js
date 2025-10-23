'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const works = [
  {
    title: 'Eino AI',
    description:
      'AI powered, digital twins for network planners that help reduce risk and costs.',
    href: 'https://michaelpons.com/portfolio/eino-ai',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/Eino_AI_Platform_3.jpg',
    alt: 'Eino AI platform',
  },
  {
    title: 'Safe Display',
    description:
      'Empowering data-driven decision making through physical distancing in the workplace.',
    href: 'https://michaelpons.com/portfolio/safe-display/',
    image: 'https://michaelpons.com/wp-content/uploads/2024/01/safe_portfolio_cover-1.jpg',
    alt: 'Safe Display',
  },
  {
    title: 'Sensei',
    description:
      'Data-driven space utilization that drives smarter real estate decisions.',
    href: 'https://michaelpons.com/portfolio/sensei/',
    image: 'https://michaelpons.com/wp-content/uploads/2024/02/Sensei.png',
    alt: 'Sensei',
  },
  {
    title: 'Link NYC',
    description: 'From the Big Apple to any thriving connected community.',
    href: 'https://michaelpons.com/portfolio/linknyc',
    image: 'https://michaelpons.com/wp-content/uploads/2024/01/LinkNYC_tablet_ui.jpeg',
    alt: 'LinkNYC',
  },
];

const focusAreas = [
  'SaaS Software',
  'AI & Automation',
  'Mobile Applications',
  'ERP & BPM Platforms',
  'Risk & Compliance',
  'Developer Tools',
];

const industries = [
  'Real Estate',
  'Digital Signage',
  'IOT Hardware',
  'Telecom / Mobility',
  'HR Tech',
  'FinTech',
];

const clients = [
  {
    name: 'Mosey',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/mosey_logo-2.png',
  },
  {
    name: 'Density',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/density_logo-2.png',
  },
  {
    name: 'Eino',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/eino_logo.png',
  },
  {
    name: 'Qai Orbes',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/Q_ai_orbes_logo.png',
  },
  {
    name: 'CMD',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/cmd_logo-1.png',
  },
  {
    name: 'Intersection',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/intersection_logo-1.png',
  },
  {
    name: 'Heroic Labs',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/heroic_labs_logo.png',
  },
];

export default function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (!isNavOpen) {
      return undefined;
    }

    function handleKeydown(event) {
      if (event.key === 'Escape') {
        setIsNavOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen((open) => !open);
  };

  const closeNav = () => setIsNavOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="logo">
          <Image
            src="https://michaelpons.com/wp-content/uploads/2025/02/cropped-cropped-Michael-Pons_profile_rd.png"
            alt="Michael Pons"
            width={58}
            height={58}
            priority
          />
        </div>
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav${isNavOpen ? ' open' : ''}`}
          aria-label="Primary"
        >
          <button
            type="button"
            className="menu-close"
            onClick={closeNav}
            aria-label="Close navigation"
          >
            ×
          </button>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={closeNav}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-content">
            <h1>
              I design minimum viable SaaS products that deliver maximum impact.
            </h1>
            <p>
              I work with early stage start-up founders, engineering and product teams to iterate, validate and ship faster
              to de-risk their product strategy.
            </p>
            <a className="button" href="#work">
              See Case Studies
            </a>
          </div>
        </section>

        <section id="work" className="work">
          <div className="section-header">
            <h2>Selected Works</h2>
          </div>
          <div className="work-grid">
            {works.map((work) => (
              <article className="work-card" key={work.title}>
                <a href={work.href} target="_blank" rel="noreferrer" aria-label={`${work.title} case study`}>
                  <Image
                    src={work.image}
                    alt={work.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    className="work-card-image"
                  />
                </a>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </article>
          ))}
          </div>
        </section>

        <section className="highlight">
          <div className="section-header">
            <h2>10+ years successfully launching 0-1 products for high-impact product teams.</h2>
          </div>
        </section>

        <section className="stats" aria-label="Experience statistics">
          <div className="stats-grid">
            <div className="stat">
              <span className="stat-number">24+</span>
              <span className="stat-label">MVP Products Shipped</span>
            </div>
            <div className="stat">
              <span className="stat-number">17+</span>
              <span className="stat-label">Industries Serviced</span>
            </div>
            <div className="stat-list">
              <h3>Focus Areas</h3>
              <ul>
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="stat-list">
              <h3>Industries</h3>
              <ul>
                {industries.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-header">
            <h2>Pragmatic, collaborative product design leadership</h2>
          </div>
          <div className="about-content">
            <p>
              Michael Pons is a dynamic and hands-on product design leader with a track record of guiding early-stage teams
              from zero to one. He pairs research-driven insight with rapid prototyping to help founders and cross-functional
              partners align, ship, and iterate faster.
            </p>
            <p>
              His work spans data-rich SaaS experiences, AI-powered workflows, and connected hardware ecosystems. By staying
              close to customers and the code, Michael ensures every release balances business goals with meaningful user
              impact.
            </p>
          </div>
        </section>

        <section className="clients" aria-labelledby="clients-title">
          <div className="section-header">
            <h2 id="clients-title">Featured Clients</h2>
          </div>
          <div className="clients-logos">
            {clients.map((client) => (
              <Image
                key={client.name}
                src={client.image}
                alt={client.name}
                width={200}
                height={100}
                sizes="(max-width: 600px) 45vw, (max-width: 1100px) 25vw, 200px"
                className="client-logo"
              />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="footer-cta">
          <h2>
            <a href="https://michaelpons.com/contact/" target="_blank" rel="noreferrer">
              Let’s Discuss Your Project!
            </a>
          </h2>
        </div>
        <div className="footer-columns">
          <div>
            <h3>Social</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/michaelpons" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/uxallday" target="_blank" rel="noreferrer">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/pons" target="_blank" rel="noreferrer">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Email</h3>
            <a href="mailto:nycuxui@gmail.com">nycuxui@gmail.com</a>
          </div>
          <div>
            <h3>Let’s chat</h3>
            <a href="https://calendly.com/michaelpons/intro" target="_blank" rel="noreferrer">
              Book an intro call
            </a>
          </div>
        </div>
        <p className="copyright">© 2025 Michael Pons. All Rights Reserved.</p>
      </footer>
    </>
  );
}
