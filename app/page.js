'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home', external: false },
  { href: 'https://michaelpons.com/work/', label: 'Work', external: true },
  { href: 'https://michaelpons.com/about/', label: 'About', external: true },
  { href: 'https://michaelpons.com/contact/', label: 'Contact', external: true },
];

const works = [
  {
    title: 'Eino AI',
    description:
      'AI powered, digital twins for network planners that help reduce risk and costs.',
    href: 'https://michaelpons.com/portfolio/eino-ai',
    image: 'https://michaelpons.com/wp-content/uploads/2024/10/Eino_AI_Platform_3.jpg',
    alt: 'Eino AI platform',
    external: true,
  },
  {
    title: 'Safe Display',
    description:
      'Empowering data-driven decision making through physical distancing in the workplace.',
    href: '/portfolio/safe-display',
    image: 'https://michaelpons.com/wp-content/uploads/2024/01/safe_portfolio_cover-1.jpg',
    alt: 'Safe Display',
    external: false,
  },
  {
    title: 'Sensei',
    description:
      'Data-driven space utilization that drives smarter real estate decisions.',
    href: 'https://michaelpons.com/portfolio/sensei/',
    image: 'https://michaelpons.com/wp-content/uploads/2024/02/Sensei.png',
    alt: 'Sensei',
    external: true,
  },
  {
    title: 'Link NYC',
    description: 'From the Big Apple to any thriving connected community.',
    href: 'https://michaelpons.com/portfolio/linknyc',
    image: 'https://michaelpons.com/wp-content/uploads/2024/01/LinkNYC_tablet_ui.jpeg',
    alt: 'LinkNYC',
    external: true,
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
          className={`menu-toggle${isNavOpen ? ' active' : ''}`}
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
          aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
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
            {navLinks.map(({ href, label, external }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeNav}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="section-inner hero-inner">
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

        <section id="work" className="section work">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-kicker">Selected Works</p>
            </div>
            <div className="work-grid">
              {works.map((work) => (
                <article className="work-card" key={work.title}>
                  <a
                    className="work-card-media"
                    href={work.href}
                    target={work.external ? '_blank' : undefined}
                    rel={work.external ? 'noreferrer' : undefined}
                    aria-label={`${work.title} case study`}
                  >
                    <Image
                      src={work.image}
                      alt={work.alt}
                      width={1200}
                      height={900}
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 520px"
                      className="work-card-image"
                    />
                  </a>
                  <div className="work-card-copy">
                    <a
                      href={work.href}
                      target={work.external ? '_blank' : undefined}
                      rel={work.external ? 'noreferrer' : undefined}
                      className="work-card-title"
                    >
                      {work.title}
                    </a>
                    <p>{work.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light highlight">
          <div className="section-inner">
            <h2>10+ years successfully launching 0-1 products for high-impact product teams.</h2>
          </div>
        </section>

        <section className="section stats" aria-label="Experience statistics">
          <div className="section-inner">
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
          </div>
        </section>

        <section className="section clients" aria-labelledby="clients-title">
          <div className="section-inner">
            <div className="section-header">
              <p id="clients-title" className="section-kicker">
                Featured Clients
              </p>
            </div>
            <div className="clients-marquee" role="presentation">
              <div className="clients-track">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    className="client-logo-wrapper"
                    key={`${client.name}-${index}`}
                    aria-hidden={index >= clients.length}
                  >
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={220}
                      height={110}
                      sizes="(max-width: 640px) 40vw, 180px"
                      className="client-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
            <ul className="sr-only">
              {clients.map((client) => (
                <li key={client.name}>{client.name}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="section-inner">
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
                    X
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
              <h3>Lets chat</h3>
              <a href="https://calendly.com/michaelpons/intro" target="_blank" rel="noreferrer">
                Book an intro call
              </a>
            </div>
          </div>
          <p className="copyright">© 2025 Michael Pons. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
