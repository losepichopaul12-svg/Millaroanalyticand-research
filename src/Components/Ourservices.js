import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Field Data Collection & Surveys",
      description:
        "Trained local enumerator teams equipped with KoboToolbox and ODK mobile tools for accurate household, market, and community surveys across Turkana.",
      highlights: [
        "GPS & Timestamp Verification",
        "Local Ng’aturkana & Swahili Fluency",
        "Offline-First Mobile Capture",
      ],
    },
    {
      number: "02",
      title: "Data Cleaning & Statistical Analysis",
      description:
        "We audit raw survey datasets, remove duplicates and anomalies, and run clear descriptive and inferential statistical analysis tailored to your questions.",
      highlights: [
        "Outlier & Bias Detection",
        "Cross-Tabulation & Trend Analysis",
        "Clean CSV, Excel & SPSS Outputs",
      ],
    },
    {
      number: "03",
      title: "Monitoring & Evaluation (M&E) Reporting",
      description:
        "End-to-end baseline, midline, and endline assessments that help NGOs, donors, and county departments measure real project impact.",
      highlights: [
        "Indicator Tracking Frameworks",
        "Donor-Ready Narrative Reports",
        "Actionable Program Recommendations",
      ],
    },
    {
      number: "04",
      title: "Custom Dashboards & Data Visualization",
      description:
        "We transform complex spreadsheets into clean, easy-to-read charts and interactive visual summaries for leadership briefings and stakeholders.",
      highlights: [
        "Executive Summary Scorecards",
        "Sub-County Geographic Breakdowns",
        "Clear Visual Storytelling",
      ],
    },
  ];

  return (
    <div className="container services-section">
      <div className="text-center mb-5">
        <small className="text-uppercase fw-bold eyebrow-label">What We Do</small>
        <h1 className="h2 fw-bold heading-dark mt-1">Research &amp; Analytics Services</h1>
        <p className="copy-muted mx-auto services-intro">
          Practical, end-to-end data solutions designed for NGOs, government agencies, and businesses operating in Turkana County.
        </p>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6" key={index}>
            <div className="service-card p-4 p-lg-5 h-100 d-flex flex-column justify-content-between shadow-sm">
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="service-tag">Service {service.number}</span>
                </div>
                <h2 className="h4 fw-bold heading-dark mb-2">{service.title}</h2>
                <p className="copy-muted small mb-4">{service.description}</p>
              </div>

              <div className="pt-3 border-top">
  <ul className="list-unstyled mb-0 vstack gap-2">
    {service.highlights.map((highlight, index) => (
      <li key={index} className="small heading-dark d-flex align-items-center gap-2">
        <span className="check-mark">✓</span>
        <span>{highlight}</span>
      </li>
    ))}
  </ul>
</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Callout */}
      <div className="cta-banner p-4 p-md-5 mt-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <h3 className="h5 fw-bold mb-1">Need a tailored survey or evaluation in Turkana?</h3>
          <p className="small text-light opacity-75 mb-0">
            Tell us your target sub-counties and sample size, and our team will prepare a clear workplan.
          </p>
        </div>
        <Link
          to="/Contactus"
          className="btn cta-btn px-4 py-2 rounded-3 flex-shrink-0 text-decoration-none"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}

export default Services;