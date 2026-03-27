export default function App() {
  const logoSrc = "/logo.png";

  const services = [
    {
      title: "Cybersecurity Services",
      text: "Risk assessments, hardening, monitoring, incident readiness, threat detection, and secure architecture across enterprise and operational technology environments.",
      bullets: [
        "Security architecture and hardening",
        "Risk assessment and mitigation",
        "Monitoring and operational resilience",
      ],
    },
    {
      title: "AI Infrastructure, Governance & Automation",
      text: "End-to-end AI capabilities including infrastructure delivery, agentic workflows, governance, guardrails, compliance, and intelligent automation aligned with enterprise and operational systems.",
      bullets: [
        "AI infrastructure delivery",
        "AI guardrails and governance",
        "AI audit, assessment, and compliance",
        "QoS, data validation, and optimization",
      ],
    },
    {
      title: "Infrastructure & Edge Platforms",
      text: "Architecture, deployment, and optimization of secure, scalable infrastructure across enterprise, cloud, and operational environments.",
      bullets: [
        "Infrastructure assessment",
        "Re-architecture and modernization",
        "Automation and self-healing",
        "Performance optimization",
      ],
    },
    {
      title: "Development, Testing & Deployment",
      text: "End-to-end solution delivery including prototyping, validation, secure deployment, and production rollout across infrastructure and AI systems.",
    },
    {
      title: "Data Management",
      text: "Data governance and compliance-driven delivery including lifecycle management, classification, secure storage, and operational visibility.",
    },
    {
      title: "Compliance & Governance",
      text: "Security-aligned governance frameworks, audit readiness, regulatory compliance, and operational controls for enterprise and regulated environments.",
    },
  ];

  const heroCapabilities = [
    "Cybersecurity Architecture",
    "AI & Edge Infrastructure",
    "Compliance & Governance",
    "Networking & Connectivity",
    "Data Lifecycle Management",
    "Secure Decommissioning",
  ];

  const lifecycle = [
    {
      title: "Design",
      text: "Architecture planning, governance frameworks, security design, and infrastructure strategy aligned with business and regulatory requirements.",
    },
    {
      title: "Deploy",
      text: "Implementation of infrastructure, networking, AI platforms, and secure environments across enterprise and operational technology systems.",
    },
    {
      title: "Secure",
      text: "Security hardening, monitoring, IDS/IPS deployment, firewall architecture, and compliance-aligned controls.",
    },
    {
      title: "Operate",
      text: "Operational support, monitoring, governance enforcement, performance optimization, and infrastructure management.",
    },
    {
      title: "Modernize",
      text: "Upgrades, architecture redesign, virtualization migrations, and AI infrastructure adoption.",
    },
    {
      title: "Decommission",
      text: "Secure retirement of infrastructure including archival, backup preservation, data classification review, and secure deletion.",
    },
  ];

  const whyPoints = [
    "Architecture-first execution",
    "Budget-aligned ROI",
    "Dedicated infrastructure, custom hosting, and end-to-end data management",
  ];

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="logo-wrap">
              <img src={logoSrc} alt="Dark Pool Solutions" className="logo" />
            </div>
            <div className="brand-tagline">
              Cybersecurity <span>•</span> Infrastructure <span>•</span> AI
            </div>
          </div>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#lifecycle">Lifecycle</a>
            <a href="#about">About</a>
            <a href="#why-dps">Why DPS</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div><div className="pill">Architecture-Driven Automation</div>

            <h1>
              We architect the future of computing.
            </h1>

            <p className="hero-copy">
              Secure, AI-driven infrastructure and automation platforms designed to improve operations, reduce cost, and deliver long-term sustainable growth across enterprise and operational environments.
            </p>

            <p className="hero-statement">
              Built on sound architecture. Optimized for performance, cost, and control.
            </p>
            
            <div className="cta-row">
            <a href="#contact" className="btn btn-accent">
            Request a Free Demo
            </a>
              <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
              <a href="#services" className="btn btn-secondary">Explore Capabilities</a>
              <a href="#contact" className="btn btn-accent">Request a Free Demo</a>
            </div>

            <div className="hero-cap-grid">
              {heroCapabilities.map((item) => (
                <div key={item} className="mini-card">{item}</div>
              ))}
            </div>
          </div>

          <div className="focus-panel">
            <div className="focus-inner">
              <div className="section-kicker">Core Focus</div>
              <div className="focus-list">
                {[
                  "Cybersecurity architecture and risk reduction",
                  "AI-enabled business and operational workflows",
                  "Virtualization, edge, and GPU-ready platforms",
                  "Data governance and compliance-driven delivery",
                ].map((item) => (
                  <div key={item} className="focus-item">
                    <span className="dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-kicker">Services</div>
          <h2>What DPS Delivers</h2>
          <p className="section-copy">
            A cleaner service structure that explains your value quickly and positions the company as both a strategic advisor and a hands-on technical delivery team.
          </p>

          <div className="card-grid">
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                {service.bullets && (
                  <ul>
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lifecycle" className="section section-alt">
        <div className="container">
          <div className="section-kicker">Technology Lifecycle</div>
          <h2>End-to-end infrastructure lifecycle</h2>
          <p className="section-copy">
            Dark Pool Solutions supports organizations across the full lifecycle of technology environments from architecture and deployment to modernization and secure decommissioning.
          </p>

          <div className="card-grid">
            {lifecycle.map((stage) => (
              <div key={stage.title} className="card">
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container narrow">
          <div className="section-kicker">About</div>
          <h2>Built for clients that need security, performance, and execution.</h2>
          <p className="section-copy">
            Dark Pool Solutions is a cybersecurity and advanced infrastructure consulting firm focused on secure computing environments for enterprise and operational technology systems, with strong capabilities in AI integration, governance, data lifecycle management, and secure decommissioning.
          </p>
        </div>
      </section>
<section id="why-dps" className="section why-section">
  <div className="container">
    <div className="why-wrap">
      <div className="pill">Why DPS</div>
      <h3 className="why-title">
        Many organizations hesitate due to uncertainty around AI. We remove that uncertainty—architecting secure, scalable solutions that optimize resources, align to budget, and deliver measurable ROI through disciplined governance.
      </h3>
      <div className="why-grid">
        {whyPoints.map((item) => (
          <div key={item} className="mini-card">{item}</div>
        ))}
      </div>
    </div>
  </div>
</section>
      <section id="contact" className="section section-alt">
        <div className="container contact-grid">
          <div>
            <div className="section-kicker">Contact</div>
            <h2>Let’s build something secure, scalable, and production-ready.</h2>
            <p className="section-copy">
              Whether you need cybersecurity guidance, AI deployment support, infrastructure modernization, or compliance-focused technical delivery, DPS can assist.
            </p>

            <div className="info-card">
              <div>
                <div className="info-label">Website</div>
                <div className="info-value">darkps.com</div>
              </div>
              <div>
                <div className="info-label">Sales</div>
                <div className="info-value">sales@darkps.com</div>
              </div>
              <div>
                <div className="info-label">Phone</div>
                <div className="info-value">(212) 439-0704</div>
              </div>
            </div>
          </div>

          <div className="form-card">
          <form action="https://formspree.io/f/xjgpbwbz" method="POST" className="form">
              <div className="form-row">
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="Phone number" />
                </div>
              </div>

              <div>
                <label htmlFor="message">Notes / Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, environment, goals, or requirements."
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Send Inquiry</button>
                <div className="form-note">
                  Form submission wiring can be connected to Formspree, Web3Forms, or your preferred backend during deployment.
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
