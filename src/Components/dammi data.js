import React, { useState, useEffect } from 'react';

// ============================================================================
// DATA CONFIGURATION FOR MILARO DATA RESEARCH (LODWAR, TURKANA COUNTY)
// ============================================================================

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Ekalale Lokorio',
    role: 'Lead Data Analyst',
    bio: 'Specializes in statistical modeling and socio-economic surveys across Northern Kenya. Brings 7+ years turning field datasets into policy insights.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    initials: 'EL'
  },
  {
    id: 2,
    name: 'Amina Nakuru',
    role: 'Field Operations Coordinator',
    bio: 'Manages trained enumerator teams across all 7 Turkana sub-counties. Expert in mobile data collection logistics and community engagement.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80',
    initials: 'AN'
  },
  {
    id: 3,
    name: 'David Lopeyok',
    role: 'M&E Specialist',
    bio: 'Designs baseline, midline, and endline evaluation frameworks for humanitarian NGOs, county programs, and livelihood initiatives.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    initials: 'DL'
  },
  {
    id: 4,
    name: 'Grace Akiru',
    role: 'ICT & Systems Lead',
    bio: 'Builds digital KoboToolbox/ODK questionnaires, automated validation checks, and interactive visual dashboards for partner organizations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    initials: 'GA'
  }
];

const SERVICES_LIST = [
  {
    id: 1,
    number: '01',
    title: 'Field Data Collection & Surveys',
    description: 'Trained local enumerator teams equipped with KoboToolbox and ODK mobile tools for accurate household, market, and community surveys across Turkana.',
    highlights: ['GPS & Timestamp Verification', 'Local Ng’aturkana & Swahili Fluency', 'Offline-First Mobile Capture']
  },
  {
    id: 2,
    number: '02',
    title: 'Data Cleaning & Statistical Analysis',
    description: 'We audit raw survey datasets, remove duplicates and anomalies, and run clear descriptive and inferential statistical analysis tailored to your questions.',
    highlights: ['Outlier & Bias Detection', 'Cross-Tabulation & Trend Analysis', 'Clean CSV, Excel & SPSS Outputs']
  },
  {
    id: 3,
    number: '03',
    title: 'Monitoring & Evaluation (M&E) Reporting',
    description: 'End-to-end baseline, midline, and endline assessments that help NGOs, donors, and county departments measure real project impact.',
    highlights: ['Indicator Tracking Frameworks', 'Donor-Ready Narrative Reports', 'Actionable Program Recommendations']
  },
  {
    id: 4,
    number: '04',
    title: 'Custom Dashboards & Data Visualization',
    description: 'We transform complex spreadsheets into clean, easy-to-read charts and interactive visual summaries for leadership briefings and stakeholders.',
    highlights: ['Executive Summary Scorecards', 'Sub-County Geographic Breakdowns', 'Clear Visual Storytelling']
  }
];

const SAMPLE_SECTOR_DATA = [
  { sector: 'Water & Sanitation (WASH)', projects: 18, completion: 92 },
  { sector: 'Livelihoods & Pastoralism', projects: 15, completion: 88 },
  { sector: 'Health & Nutrition', projects: 11, completion: 95 },
  { sector: 'Renewable Energy & Solar', projects: 9, completion: 84 }
];

// ============================================================================
// MAIN REACT COMPONENT (SINGLE FILE WITH BOOTSTRAP 5)
// ============================================================================

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedSectorMetric, setSelectedSectorMetric] = useState('projects');

  // Contact form state (client-side only)
  const [contactForm, setContactForm] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Inject Bootstrap 5.3 CSS & Google Fonts dynamically so the preview renders cleanly
  useEffect(() => {
    const bootstrapLinkId = 'milaro-bootstrap-css';
    if (!document.getElementById(bootstrapLinkId)) {
      const link = document.createElement('link');
      link.id = bootstrapLinkId;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
      document.head.appendChild(link);
    }

    const fontLinkId = 'milaro-google-fonts';
    if (!document.getElementById(fontLinkId)) {
      const fontLink = document.createElement('link');
      fontLink.id = fontLinkId;
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      document.head.appendChild(fontLink);
    }
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setContactForm({ name: '', organization: '', email: '', message: '' });
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#F8FAFC', color: '#0F172A', fontFamily: "'Inter', sans-serif" }}>
      {/* Custom Scoped Theme Styles */}
      <style>{`
        .bg-milaro-navy { background-color: #0F172A !important; }
        .text-milaro-navy { color: #0F172A !important; }
        .bg-milaro-amber { background-color: #D97706 !important; }
        .text-milaro-amber { color: #D97706 !important; }
        .text-milaro-slate { color: #64748B !important; }
        .btn-milaro-amber {
          background-color: #D97706;
          border-color: #D97706;
          color: #FFFFFF;
          font-weight: 600;
        }
        .btn-milaro-amber:hover {
          background-color: #B45309;
          border-color: #B45309;
          color: #FFFFFF;
        }
        .btn-milaro-outline {
          border: 1.5px solid #CBD5E1;
          color: #FFFFFF;
          font-weight: 500;
        }
        .btn-milaro-outline:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border-color: #FFFFFF;
        }
        .milaro-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .milaro-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
        }
        .nav-link-custom {
          color: #475569;
          font-weight: 500;
          padding: 0.5rem 0.9rem !important;
          border-radius: 8px;
          transition: all 0.15s ease;
        }
        .nav-link-custom:hover {
          color: #0F172A;
          background-color: #F1F5F9;
        }
        .nav-link-custom.active {
          color: #D97706 !important;
          background-color: #FEF3C7;
          font-weight: 600;
        }
        .hero-pattern {
          background-color: #0F172A;
          background-image: radial-gradient(rgba(217, 119, 6, 0.16) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* ====================================================================
          TOP BOOTSTRAP NAVBAR
      ==================================================================== */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top py-3 shadow-sm">
        <div className="container">
          {/* Brand Logo */}
          <button
            onClick={() => navigateTo('home')}
            className="navbar-brand d-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start"
          >
            <span
              className="d-inline-flex align-items-center justify-content-center rounded-3 text-white fw-bold"
              style={{ width: '38px', height: '38px', backgroundColor: '#0F172A' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </span>
            <div>
              <span className="fw-bold text-milaro-navy d-block lh-1" style={{ fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                MILARO
              </span>
              <small className="text-milaro-slate d-block" style={{ fontSize: '0.7rem', letterSpacing: '0.06em' }}>
                DATA RESEARCH
              </small>
            </div>
          </button>

          {/* Responsive Mobile Hamburger Toggle */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className={`collapse navbar-collapse ${mobileNavOpen ? 'show mt-3' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1 gap-lg-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'team', label: 'Our Team' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li className="nav-item" key={item.id}>
                  <button
                    onClick={() => navigateTo(item.id)}
                    className={`nav-link nav-link-custom border-0 bg-transparent w-100 text-start ${
                      activePage === item.id ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <button
                  onClick={() => navigateTo('contact')}
                  className="btn btn-milaro-amber btn-sm px-3 py-2 rounded-3 w-100"
                >
                  Request Survey
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ====================================================================
          MAIN PAGE VIEWPORT
      ==================================================================== */}
      <main className="flex-grow-1">
        {/* ------------------------------------------------------------------
            PAGE 1: HOME
        ------------------------------------------------------------------ */}
        {activePage === 'home' && (
          <div>
            {/* Hero Banner */}
            <section className="hero-pattern text-white py-5">
              <div className="container py-4 py-lg-5">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <span className="badge rounded-pill px-3 py-2 mb-3 fw-semibold" style={{ backgroundColor: 'rgba(217, 119, 6, 0.2)', color: '#FBBF24', border: '1px solid rgba(217, 119, 6, 0.4)' }}>
                      Lodwar, Turkana County • Kenya
                    </span>
                    <h1 className="display-5 fw-bold mb-3 lh-sm">
                      Actionable Data Research &amp; Analytics for Turkana and Beyond
                    </h1>
                    <p className="lead text-light opacity-75 mb-4" style={{ fontSize: '1.1rem', maxWidth: '640px' }}>
                      We collect verified field data and turn complex numbers into clear insights for NGOs, county programs, and growing businesses across Northern Kenya.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <button
                        onClick={() => navigateTo('services')}
                        className="btn btn-milaro-amber px-4 py-2.5 rounded-3"
                      >
                        Explore Services
                      </button>
                      <button
                        onClick={() => navigateTo('contact')}
                        className="btn btn-milaro-outline px-4 py-2.5 rounded-3"
                      >
                        Get in Touch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3 Simple Metric Cards */}
            <section className="container" style={{ marginTop: '-28px' }}>
              <div className="row g-3 g-md-4">
                {[
                  { value: '50+', label: 'Local Surveys Completed', sub: 'Across communities & markets' },
                  { value: '100%', label: 'Field Verified Data', sub: 'GPS & quality-checked entries' },
                  { value: '7', label: 'Sub-Counties Covered', sub: 'Full Turkana County reach' }
                ].map((metric, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="milaro-card p-4 h-100 shadow-sm">
                      <div className="h2 fw-bold text-milaro-amber mb-1">{metric.value}</div>
                      <div className="fw-semibold text-milaro-navy">{metric.label}</div>
                      <small className="text-milaro-slate">{metric.sub}</small>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Milaro? 3-Column Highlight Strip */}
            <section className="container py-5 mt-3">
              <div className="text-center mb-4">
                <small className="text-uppercase fw-bold text-milaro-amber tracking-wider">Why Partner With Us</small>
                <h2 className="h3 fw-bold text-milaro-navy mt-1">Why Milaro?</h2>
              </div>

              <div className="row g-4">
                <div className="col-md-4">
                  <div className="milaro-card p-4 h-100">
                    <div className="rounded-3 d-inline-flex p-2.5 mb-3" style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}>
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="h5 fw-bold text-milaro-navy">Local Field Expertise</h3>
                    <p className="text-milaro-slate small mb-0">
                      Our enumerators live in Turkana, speak local languages, and understand regional terrain and cultural context.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="milaro-card p-4 h-100">
                    <div className="rounded-3 d-inline-flex p-2.5 mb-3" style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}>
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="h5 fw-bold text-milaro-navy">Accurate Data Collection</h3>
                    <p className="text-milaro-slate small mb-0">
                      We use digital KoboToolbox and ODK forms with built-in validation rules to prevent entry errors at the source.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="milaro-card p-4 h-100">
                    <div className="rounded-3 d-inline-flex p-2.5 mb-3" style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}>
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    </div>
                    <h3 className="h5 fw-bold text-milaro-navy">Clear Visual Insights</h3>
                    <p className="text-milaro-slate small mb-0">
                      We deliver clean charts, executive summaries, and straightforward reports that decision-makers can act on immediately.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          

                
        
          </div>
        )}

        {/* ------------------------------------------------------------------
            PAGE 2: ABOUT US
        ------------------------------------------------------------------ */}
        {activePage === 'about' && (
          <div className="container py-5">
            {/* Header */}
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <small className="text-uppercase fw-bold text-milaro-amber">Who We Are</small>
                <h1 className="h2 fw-bold text-milaro-navy mt-1 mb-3">
                  Bridging Local Turkana Context with Modern Data Analytics
                </h1>
                <p className="text-milaro-slate">
                  Headquartered in Lodwar, Turkana County, Milaro Data Research was founded to solve a critical gap: organizations working in Northern Kenya needed reliable, ground-truthed data gathered by professionals who truly understand the region.
                </p>
                <p className="text-milaro-slate mb-0">
                  Today, we support humanitarian NGOs, county government departments, and private enterprises with end-to-end field surveys, statistical analysis, and clear reporting.
                </p>
              </div>
            </div>

            {/* Mission & Vision Side-by-Side */}
            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className="milaro-card p-4 p-lg-5 h-100 border-start border-4" style={{ borderLeftColor: '#D97706' }}>
                  <span className="badge text-bg-warning mb-2">Our Mission</span>
                  <h2 className="h4 fw-bold text-milaro-navy">Empower Decisions Through Truthful Data</h2>
                  <p className="text-milaro-slate mb-0">
                    To deliver accurate, ethically collected, and easy-to-understand research insights that help institutions design better programs and investments in Turkana and across Kenya.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="milaro-card p-4 p-lg-5 h-100 border-start border-4" style={{ borderLeftColor: '#0F172A' }}>
                  <span className="badge bg-milaro-navy text-white mb-2">Our Vision</span>
                  <h2 className="h4 fw-bold text-milaro-navy">Northern Kenya’s Most Trusted Analytics Hub</h2>
                  <p className="text-milaro-slate mb-0">
                    To be the leading regional center of excellence for empirical field research, local talent development, and evidence-based decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Core Values */}
            <div className="text-center mb-4">
              <h2 className="h4 fw-bold text-milaro-navy">Our Core Values</h2>
            </div>
            <div className="row g-4">
              {[
                {
                  title: 'Integrity',
                  desc: 'We never fabricate or alter numbers. Every dataset is audited with GPS timestamps and strict quality control checks.'
                },
                {
                  title: 'Local Context',
                  desc: 'Data means nothing without understanding people. Our local field teams ensure culturally respectful and accurate interviews.'
                },
                {
                  title: 'Clarity',
                  desc: 'We avoid unnecessary jargon. Our reports and visuals present findings in plain, actionable language.'
                }
              ].map((val, i) => (
                <div className="col-md-4" key={i}>
                  <div className="milaro-card p-4 h-100 text-center">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center fw-bold mb-3"
                      style={{ width: '44px', height: '44px', backgroundColor: '#FEF3C7', color: '#D97706' }}
                    >
                      0{i + 1}
                    </div>
                    <h3 className="h5 fw-bold text-milaro-navy">{val.title}</h3>
                    <p className="text-milaro-slate small mb-0">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------
            PAGE 3: SERVICES (2x2 GRID OF 4 CLEAN BOOTSTRAP CARDS)
        ------------------------------------------------------------------ */}
        {activePage === 'services' && (
          <div className="container py-5">
            <div className="text-center mb-5">
              <small className="text-uppercase fw-bold text-milaro-amber">What We Do</small>
              <h1 className="h2 fw-bold text-milaro-navy mt-1">Research &amp; Analytics Services</h1>
              <p className="text-milaro-slate mx-auto" style={{ maxWidth: '600px' }}>
                Practical, end-to-end data solutions designed for NGOs, government agencies, and businesses operating in Turkana County.
              </p>
            </div>

            <div className="row g-4">
              {SERVICES_LIST.map((service) => (
                <div className="col-md-6" key={service.id}>
                  <div className="milaro-card p-4 p-lg-5 h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span
                          className="fw-bold px-3 py-1 rounded-3 small"
                          style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}
                        >
                          Service {service.number}
                        </span>
                      </div>
                      <h2 className="h4 fw-bold text-milaro-navy mb-2">{service.title}</h2>
                      <p className="text-milaro-slate small mb-4">{service.description}</p>
                    </div>

                    <div className="pt-3 border-top">
                      <ul className="list-unstyled mb-0 vstack gap-2">
                        {service.highlights.map((item, idx) => (
                          <li key={idx} className="small text-milaro-navy d-flex align-items-center gap-2">
                            <span className="text-milaro-amber fw-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="bg-milaro-navy text-white rounded-4 p-4 p-md-5 mt-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
              <div>
                <h3 className="h5 fw-bold mb-1">Need a tailored survey or evaluation in Turkana?</h3>
                <p className="small text-light opacity-75 mb-0">
                  Tell us your target sub-counties and sample size, and our team will prepare a clear workplan.
                </p>
              </div>
              <button
                onClick={() => navigateTo('contact')}
                className="btn btn-milaro-amber px-4 py-2.5 rounded-3 shrink-0"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------
            PAGE 4: OUR TEAM (4 TEAM CARDS WITH PORTRAITS & FALLBACKS)
        ------------------------------------------------------------------ */}
        {activePage === 'team' && (
          <div className="container py-5">
            <div className="text-center mb-5">
              <small className="text-uppercase fw-bold text-milaro-amber">The People Behind the Data</small>
              <h1 className="h2 fw-bold text-milaro-navy mt-1">Meet Our Team</h1>
              <p className="text-milaro-slate mx-auto" style={{ maxWidth: '580px' }}>
                A dedicated team of statisticians, field coordinators, and ICT specialists based in Lodwar.
              </p>
            </div>

            <div className="row g-4">
              {TEAM_MEMBERS.map((member) => (
                <div className="col-sm-6 col-lg-3" key={member.id}>
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------
            PAGE 5: CONTACT (2-COLUMN OFFICE INFO + INTERACTIVE FORM)
        ------------------------------------------------------------------ */}
        {activePage === 'contact' && (
         
      {/* ====================================================================
          CLEAN 3-COLUMN BOOTSTRAP FOOTER
      ==================================================================== */}
      <footer className="bg-milaro-navy text-white pt-5 pb-4 mt-auto border-top border-secondary">
        <div className="container">
          <div className="row g-4 pb-4 border-bottom border-secondary">
            {/* Column 1: Brand & Lodwar Office Info */}
            <div className="col-md-4">
              <div className="fw-bold fs-5 mb-2">
                MILARO <span className="text-milaro-amber">DATA RESEARCH</span>
              </div>
              <p className="small text-light opacity-75 mb-3">
                Empirical field data collection, statistical analysis, and M&amp;E reporting based in Lodwar, Turkana County, Kenya.
              </p>
              <div className="small text-light opacity-75">
                Lodwar Town, Turkana County, Kenya
              </div>
            </div>

            {/* Column 2: Quick Navigation Links */}
            <div className="col-md-4">
              <h5 className="h6 fw-bold text-uppercase text-milaro-amber mb-3">Quick Links</h5>
              <ul className="list-unstyled vstack gap-2 small">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Us' },
                  { id: 'services', label: 'Our Services' },
                  { id: 'team', label: 'Our Team' },
                  { id: 'contact', label: 'Contact Us' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => navigateTo(link.id)}
                      className="btn btn-link text-light opacity-75 text-decoration-none p-0 small"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Social Links */}
            <div className="col-md-4">
              <h5 className="h6 fw-bold text-uppercase text-milaro-amber mb-3">Connect With Us</h5>
              <ul className="list-unstyled vstack gap-2 small text-light opacity-75 mb-3">
                <li>Email: info@milaroresearch.co.ke</li>
                <li>Phone: +254 712 480 910</li>
              </ul>
              <div className="d-flex gap-2">
                <a
                  href="#linkedin"
                  onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                  className="btn btn-sm btn-outline-light rounded-3 px-3"
                >
                  LinkedIn
                </a>
                <a
                  href="#x"
                  onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                  className="btn btn-sm btn-outline-light rounded-3 px-3"
                >
                  X (Twitter)
                </a>
                <a
                  href="mailto:info@milaroresearch.co.ke"
                  className="btn btn-sm btn-milaro-amber rounded-3 px-3"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="pt-3 text-center small text-light opacity-50">
            &copy; {new Date().getFullYear()} Milaro Data Research • Lodwar, Turkana County, Kenya. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// SUB-COMPONENT: TEAM MEMBER CARD WITH GRACEFUL IMAGE FALLBACK
// ============================================================================

function TeamMemberCard({ member }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="milaro-card overflow-hidden h-100 d-flex flex-column">
      <div style={{ height: '240px', backgroundColor: '#E2E8F0' }} className="position-relative overflow-hidden">
        {!imgError ? (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setImgError(true)}
            className="w-100 h-100"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        ) : (
          <div
            className="w-100 h-100 d-flex align-items-center justify-content-center text-white fw-bold fs-2"
            style={{ backgroundColor: '#0F172A' }}
          >
            {member.initials}
          </div>
        )}
      </div>
      <div className="p-4 flex-grow-1 d-flex flex-column">
        <h3 className="h5 fw-bold text-milaro-navy mb-1">{member.name}</h3>
        <div className="small fw-semibold text-milaro-amber mb-2">{member.role}</div>
        <p className="small text-milaro-slate mb-0">{member.bio}</p>
      </div>
    </div>
  );
}