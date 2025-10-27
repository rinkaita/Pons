import Image from 'next/image';
import Link from 'next/link';

const heroStats = [
  { label: 'Role', value: 'Product Design Lead' },
  { label: 'Timeline', value: '6 weeks (pandemic response sprint)' },
  { label: 'Platforms', value: 'Web dashboard & 55" digital signage' },
  { label: 'Partners', value: 'Product, Engineering, Data Science' },
];

const outcomeHighlights = [
  {
    title: 'Real-time occupancy insight',
    description:
      'Mapped building, floor, and room level capacity to give teams confidence on how many people could safely be on-site at once.',
  },
  {
    title: 'Simple guidance for employees',
    description:
      'Translated dense health regulations into easy-to-scan signage states that helped employees understand when a space was safe to enter.',
  },
  {
    title: 'Frictionless operations',
    description:
      'Automated signage updates from live sensor data so workplace teams could focus on change management instead of manual reporting.',
  },
];

const processSteps = [
  {
    title: 'Rapid discovery',
    description:
      'Interviewed workplace leaders across Fortune 500 clients to understand pain points around reopening plans, signage management, and compliance.',
  },
  {
    title: 'Systems mapping',
    description:
      'Audited sensor coverage, badge data, and municipal requirements to define source-of-truth data flows for room capacity and alert thresholds.',
  },
  {
    title: 'Prototyping & validation',
    description:
      'Built interactive prototypes for both a planning dashboard and digital signage loops, then validated messaging comprehension with pilot teams.',
  },
  {
    title: 'Release support',
    description:
      'Partnered with engineering to QA the responsive web experience, define content governance, and document rollout playbooks for customer success.',
  },
];

export const metadata = {
  title: 'Safe Display Case Study | Michael Pons',
  description:
    'How Michael Pons partnered with Density to design Safe Display, a real-time occupancy solution that helped enterprises reopen responsibly.',
};

export default function SafeDisplayCaseStudyPage() {
  return (
    <main className="case-page">
      <article>
        <section className="case-hero">
          <div className="section-inner case-hero-inner">
            <div className="case-hero-copy">
              <p className="case-kicker">Case Study</p>
              <h1>Safe Display</h1>
              <p className="case-lede">
                Empowering enterprise workplace teams to make fast, data-driven decisions about physical distancing during the height of the
                COVID-19 pandemic.
              </p>
              <dl className="case-hero-stats">
                {heroStats.map(({ label, value }) => (
                  <div key={label} className="case-hero-stat">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="case-hero-media">
              <div className="case-hero-frame">
                <Image
                  src="https://michaelpons.com/wp-content/uploads/2024/01/safe_portfolio_cover-1.jpg"
                  alt="Safe Display hero screens showing building capacity states"
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="section-inner case-section-inner">
            <div className="case-section-header">
              <p className="case-kicker">Project Overview</p>
              <h2>Helping workplaces reopen responsibly.</h2>
              <p>
                In the early months of the pandemic, Density needed a way to translate live occupancy sensing into signage that guided people to safe
                spaces. I led design across the data visualization dashboard and a companion digital signage experience that broadcasted when a
                space had reached capacity.
              </p>
            </div>
            <div className="case-section-body">
              <div className="case-column">
                <h3>What we shipped</h3>
                <ul>
                  <li>Responsive web dashboard for real-time and historical occupancy monitoring.</li>
                  <li>Configurable alert thresholds per building, floor, and room.</li>
                  <li>Digital signage templates that automatically cycle through states.</li>
                  <li>Content governance system for facilities and communications teams.</li>
                </ul>
              </div>
              <div className="case-column">
                <h3>My contributions</h3>
                <ul>
                  <li>Aligned stakeholders on product vision and scope within a two-week sprint.</li>
                  <li>Designed the information architecture for multi-property portfolios.</li>
                  <li>Created the visual language for signage that balanced urgency with calm.</li>
                  <li>Established handoff specs, accessibility guidance, and QA support.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-section-dark">
          <div className="section-inner case-section-inner">
            <div className="case-section-header">
              <p className="case-kicker">Impact</p>
              <h2>Turning sensor data into actionable confidence.</h2>
            </div>
            <div className="case-card-grid">
              {outcomeHighlights.map((item) => (
                <div key={item.title} className="case-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="section-inner case-section-inner">
            <div className="case-section-header">
              <p className="case-kicker">The Challenge</p>
              <h2>Translate evolving regulations into calm, clear guidance.</h2>
            </div>
            <div className="case-split">
              <div>
                <h3>Observations</h3>
                <p>
                  Workplace teams were inundated with changing local guidelines and had little time to interpret what they meant for each location.
                  Employees needed reassurance that the office wasn&apos;t overcrowded, but existing signage was static and quickly outdated.
                </p>
              </div>
              <div>
                <h3>Opportunity</h3>
                <p>
                  By marrying live occupancy data with intuitive communication patterns, we could help organizations keep people safe while
                  demonstrating compliance for executives, HR, and legal stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="section-inner case-section-inner">
            <div className="case-section-header">
              <p className="case-kicker">Process</p>
              <h2>Designing at the speed of an emergency response.</h2>
            </div>
            <div className="case-timeline">
              {processSteps.map((step) => (
                <div key={step.title} className="case-timeline-step">
                  <span className="case-timeline-marker" aria-hidden="true" />
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-section-image">
          <div className="section-inner case-section-inner">
            <div className="case-section-header">
              <p className="case-kicker">Experience Highlights</p>
              <h2>Balancing clarity and urgency across every touchpoint.</h2>
            </div>
            <div className="case-gallery">
              <figure className="case-gallery-card">
                <div className="case-gallery-frame">
                  <Image
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                    alt="Digital signage screen mounted in a workplace lobby"
                    fill
                    sizes="(max-width: 900px) 100vw, 520px"
                  />
                </div>
                <figcaption>
                  Signage states translated complex capacity metrics into a simple red, yellow, green system with supporting guidance.
                </figcaption>
              </figure>
              <figure className="case-gallery-card">
                <div className="case-gallery-frame">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="Product design dashboard displayed on a laptop"
                    fill
                    sizes="(max-width: 900px) 100vw, 520px"
                  />
                </div>
                <figcaption>
                  The planning dashboard highlighted critical locations, upcoming threshold breaches, and historical trends to support executive
                  reporting.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="section-inner case-section-inner">
            <div className="case-quote">
              <blockquote>
                “Safe Display helped our facilities and HR teams communicate clear capacity limits without adding new workstreams. Employees trusted
                the data because it was grounded in real-time sensing.”
              </blockquote>
              <p className="case-quote-attribution">Director of Workplace Experience, Fortune 100 client</p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="section-inner case-section-inner">
            <div className="case-section-header">
              <p className="case-kicker">Results</p>
              <h2>From crisis solution to lasting operations tool.</h2>
            </div>
            <div className="case-split">
              <div>
                <p>
                  Within weeks of launch, Safe Display became a core part of Density&apos;s return-to-office playbook. Enterprises rolled the signage out
                  across hundreds of locations, and customer success teams used the dashboard to advise clients on portfolio-level reopening
                  strategies.
                </p>
              </div>
              <div>
                <ul className="case-results-list">
                  <li>Backed executive reopening decisions with verifiable data.</li>
                  <li>Accelerated compliance reporting for legal and HR partners.</li>
                  <li>Set the foundation for Density&apos;s long-term workplace analytics roadmap.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-cta">
          <div className="section-inner case-section-inner">
            <div className="case-cta-card">
              <h2>Building a critical product under tight deadlines?</h2>
              <p>Let&apos;s partner to align stakeholders, prototype rapidly, and launch with confidence.</p>
              <Link className="button" href="https://michaelpons.com/contact/" target="_blank" rel="noreferrer">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
