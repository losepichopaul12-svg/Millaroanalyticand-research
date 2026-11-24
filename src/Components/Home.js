import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const metrics = [
    {
      value: "50+",
      label: "Local Surveys Completed",
      sub: "Across communities & markets",
    },
    {
      value: "100%",
      label: "Field Verified Data",
      sub: "GPS & quality-checked entries",
    },
    {
      value: "7",
      label: "Sub-Counties Covered",
      sub: "Full Turkana County reach",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container py-3 py-lg-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge rounded-pill px-3 py-2 mb-3 fw-semibold hero-location-badge">
                Lodwar, Turkana County • Kenya
              </span>
              <h1 className="display-5 fw-bold mb-3 lh-sm">
                Actionable Data Research &amp; Analytics for Turkana and Beyond
              </h1>
              <p className="lead text-light opacity-75 mb-4 hero-lead">
                We collect verified field data and turn complex numbers into clear insights for NGOs, county programs, and growing businesses across Northern Kenya.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  className="btn hero-btn-primary px-4 py-2 rounded-3 text-decoration-none"
                  to="/Ourservices"
                >
                  Explore Services
                </Link>
                <Link
                  className="btn hero-btn-secondary px-4 py-2 rounded-3 text-decoration-none"
                  to="/contactus"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Metric Cards */}
      <section className="container metrics-strip">
        <div className="row g-3 g-md-4">
          {metrics.map((metric, index) => (
            <div className="col-md-4" key={index}>
              <div className="home-card p-4 h-100 shadow-sm">
                <div className="h2 fw-bold metric-value mb-1">{metric.value}</div>
                <div className="fw-semibold home-heading">{metric.label}</div>
                <small className="home-copy">{metric.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Milaro? 3-Column Highlight Strip */}
      <section className="container py-5 mt-2">
        <div className="text-center mb-4">
          <small className="text-uppercase fw-bold home-eyebrow">Why Partner With Us</small>
          <h2 className="h3 fw-bold home-heading mt-1">Why Milaro?</h2>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="home-card p-4 h-100 shadow-sm">
              <div className="d-inline-flex align-items-center justify-content-center mb-3 highlight-icon-box">
                <i className="bi bi-geo-alt fs-5"></i>
              </div>
              <h3 className="h5 fw-bold home-heading">Local Field Expertise</h3>
              <p className="home-copy small mb-0">
                Our enumerators live in Turkana, speak local languages, and understand regional terrain and cultural context.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="home-card p-4 h-100 shadow-sm">
              <div className="d-inline-flex align-items-center justify-content-center mb-3 highlight-icon-box">
                <i className="bi bi-check2-circle fs-5"></i>
              </div>
              <h3 className="h5 fw-bold home-heading">Accurate Data Collection</h3>
              <p className="home-copy small mb-0">
                We use digital KoboToolbox and ODK forms with built-in validation rules to prevent entry errors at the source.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="home-card p-4 h-100 shadow-sm">
              <div className="d-inline-flex align-items-center justify-content-center mb-3 highlight-icon-box">
                <i className="bi bi-pie-chart fs-5"></i>
              </div>
              <h3 className="h5 fw-bold home-heading">Clear Visual Insights</h3>
              <p className="home-copy small mb-0">
                We deliver clean charts, executive summaries, and straightforward reports that decision-makers can act on immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;