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
      title: "Infrastructure Optimization",
      text: "Performance tuning and optimization across server, storage, virtualization, and network environments to improve efficiency, reduce bottlenecks, and maximize ROI.",
      bullets: [
        "Server and compute optimization",
        "Network performance and segmentation",
        "Storage and throughput tuning",
        "Capacity planning and scaling",
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
      title: "Cloud Partnerships & Multi-Cloud Strategy",
      text: "Architecture, deployment, and governance across public, private, and hybrid cloud environments designed for performance, cost control, and long-term scalability.",
      bullets: [
        "Cloud and hybrid architecture",
        "Workload placement and cost optimization",
        "Secure cloud networking and segmentation",
        "Identity, access, and governance controls",
      ],
    },
    {
      title: "High-Performance Hosting & GPU Infrastructure",
      text: "Dedicated high-performance hosting environments for AI, data-intensive, and mission-critical workloads including server, storage, networking, and GPU-enabled platforms.",
      bullets: [
        "Dedicated server and private hosting environments",
        "GPU-enabled infrastructure for AI and model workloads",
        "High-speed networking and storage platforms",
        "Managed or client-controlled hosting options",
      ],
    },
    {
      title: "Business Continuity & Disaster Recovery",
      text: "BCDR solutions aligned to Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO), with transparent recovery expectations across legacy, hybrid, and modern environments.",
      bullets: [
        "BCDR strategy and assessment",
        "Recovery architecture and failover design",
        "Backup, replication, and data protection",
        "Testing, validation, and compliance alignment",
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
    "AI & GPU Infrastructure",
    "Cloud & Hosting Platforms",
    "Compliance & Governance",
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
            <a href="#platforms">Platforms</a>
            <a href="#bcdr">BCDR</a>
            <a href="#lifecycle">Lifecycle</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill">Architecture-Driven Automation</div>

            <h1>We architect the future of computing.</h1>

            <p className="hero-copy">
              Secure, AI-driven infrastructure and automation platforms across cloud, edge, and dedicated environments—designed to improve operations, reduce cost, and deliver long-term sustainable growth.
            </p>

            <p className="hero-statement">
              Built on sound architecture. Optimized for performance, cost, and control.
            </p>

            <div className="cta-row">
              <a href="#contact" className="btn btn-accent">
                Request a Free Demo
              </a>
              <a href="#contact" className="btn btn-primary">
                Schedule a Consultation
              </a>
              <a href="#services" className="btn btn-secondary">
                Explore Capabilities
              </a>
            </div>

            <div className="hero-cap-grid">
              {heroCapabilities.map((item) => (
                <div key={item} className="mini-card">
                  {item}
                </div>
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
                  "Cloud, dedicated, and GPU-ready platforms",
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
            Architecture-driven services that combine cybersecurity, infrastructure, cloud, hosting, resilience, and AI platform delivery into a single enterprise-capable operating model.
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

      <section id="platforms" className="section section-alt">
        <div className="container">
          <div className="section-kicker">Cloud & Hosting Platforms</div>
          <h2>Cloud partnerships and high-performance infrastructure delivery.</h2>
          <p className="section-copy">
            Dark Pool Solutions delivers secure cloud, dedicated hosting, and GPU-enabled infrastructure platforms designed for AI, high-performance applications, and cost-aligned long-term growth.
          </p>

          <div className="card-grid">
            <div className="card">
              <h3>Cloud Partnerships</h3>
              <p>
                Multi-cloud and hybrid architecture aligned to performance, compliance, and operational goals without unnecessary vendor lock-in.
              </p>
              <ul>
                <li>Public, private, and hybrid cloud strategy</li>
                <li>Secure cloud networking and segmentation</li>
                <li>Identity, access, and governance integration</li>
                <li>Cost and workload optimization</li>
              </ul>
            </div>

            <div className="card">
              <h3>High-Performance Hosting</h3>
              <p>
                Dedicated server, storage, and network environments built for high-demand applications, secure isolated workloads, and enterprise performance requirements.
              </p>
              <ul>
                <li>Dedicated hosting environments</li>
                <li>Private infrastructure platforms</li>
                <li>High-speed storage and networking</li>
                <li>Managed or client-controlled deployments</li>
              </ul>
            </div>

            <div className="card">
              <h3>GPU & AI Compute</h3>
              <p>
                GPU-enabled compute infrastructure for AI training, inference, distributed workloads, and data-intensive applications across cloud, edge, and dedicated environments.
              </p>
              <ul>
                <li>GPU server platforms</li>
                <li>AI training and inference environments</li>
                <li>Distributed and edge AI deployments</li>
                <li>Performance optimization and scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="bcdr" className="section">
        <div className="container">
          <div className="section-kicker">Business Continuity & Disaster Recovery</div>
          <h2>Recovery objectives over generic promises.</h2>
          <p className="section-copy">
            In Business Continuity and Disaster Recovery, there is no one-size-fits-all timeline. Legacy systems, hybrid environments, and modern cloud platforms all operate with different recovery constraints. At DPS, we design solutions around clearly defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).
          </p>
          <p className="section-copy">
            This gives organizations a transparent understanding of how quickly services can be restored, how much data can be recovered, and what level of continuity is realistically achievable. Our disaster recovery performance is directly driven by underlying infrastructure optimization—ensuring failover systems operate at peak efficiency with minimal latency and maximum reliability.
          </p>

          <div className="card-grid">
            <div className="card">
              <h3>BCDR Strategy & Assessment</h3>
              <p>
                Comprehensive evaluation of existing infrastructure, risks, failure domains, and resilience gaps with RTO/RPO targets aligned to business and compliance requirements.
              </p>
            </div>

            <div className="card">
              <h3>Disaster Recovery Architecture</h3>
              <p>
                Design and implementation of resilient architectures across on-prem, hybrid, and cloud environments, including failover systems, replication, and automated recovery workflows.
              </p>
            </div>

            <div className="card">
              <h3>High Availability & Failover</h3>
              <p>
                Clustered systems, redundancy planning, and failover architecture designed to minimize downtime and maintain continuity for critical workloads.
              </p>
            </div>

            <div className="card">
              <h3>Backup & Data Protection</h3>
              <p>
                Policy-driven backup, encryption, versioning, and rapid recovery solutions designed to meet strict RPO targets and reduce exposure to ransomware and data loss.
              </p>
            </div>

            <div className="card">
              <h3>Cloud & Hybrid DR</h3>
              <p>
                Warm, cold, and hybrid standby environments with cloud failover and infrastructure replication aligned to workload criticality and budget.
              </p>
            </div>

            <div className="card">
              <h3>Testing & Compliance Validation</h3>
              <p>
                Regular recovery testing, audit support, and compliance alignment with NIST, SOC 2, HIPAA, PCI, and other governance frameworks.
              </p>
            </div>
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
            Dark Pool Solutions is a cybersecurity and advanced infrastructure consulting firm focused on secure computing environments for enterprise and operational technology systems, with strong capabilities in AI integration, governance, infrastructure optimization, cloud and hosting platforms, data lifecycle management, resilience engineering, and secure decommissioning.
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
                <div key={item} className="mini-card">
                  {item}
                </div>
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
              Whether you need cybersecurity guidance, AI deployment support, infrastructure modernization, hosting, or compliance-focused technical delivery, DPS can assist.
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
                <button type="submit" className="btn btn-primary">
                  Send Inquiry
                </button>
                <div className="form-note">
                  Secure inquiry submission powered by Formspree.
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
