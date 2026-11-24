import React from "react";
import { FiShield, FiMapPin, FiEye } from "react-icons/fi";
import "./About.css";

function Aboutus() {
  const coreValues = [
    {
      icon: <FiShield />,
      title: "Integrity",
      desc: "We never fabricate or alter numbers. Every dataset is audited with GPS timestamps and strict quality control checks.",
    },
    {
      icon: <FiMapPin />,
      title: "Local Context",
      desc: "Data means nothing without understanding people. Our local field teams ensure culturally respectful and accurate interviews.",
    },
    {
      icon: <FiEye />,
      title: "Clarity",
      desc: "We avoid unnecessary jargon. Our reports and visuals present findings in plain, actionable language.",
    },
  ];

  return (
    <div className="container about-section">
      {/* Header */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <small className="text-uppercase fw-bold eyebrow-text">Who We Are</small>
          <h1 className="h2 fw-bold title-dark mt-1 mb-3">
            Bridging Local Turkana Context with Modern Data Analytics
          </h1>
          <p className="body-copy">
            Headquartered in Lodwar, Turkana County, Milaro Data Research was founded to solve a critical gap: organizations working in Northern Kenya needed reliable, ground-truthed data gathered by professionals who truly understand the region.
          </p>
          <p className="body-copy mb-0">
            Today, we support humanitarian NGOs, county government departments, and private enterprises with end-to-end field surveys, statistical analysis, and clear reporting.
          </p>
        </div>
      </div>

      {/* Mission & Vision Side-by-Side */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="about-card mission-box p-4 p-lg-5 h-100">
            <span className="badge text-bg-warning mb-2">Our Mission</span>
            <h2 className="h4 fw-bold title-dark">Empower Decisions Through Truthful Data</h2>
            <p className="body-copy mb-0">
              To deliver accurate, ethically collected, and easy-to-understand research insights that help institutions design better programs and investments in Turkana and across Kenya.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="about-card vision-box p-4 p-lg-5 h-100">
            <span className="badge vision-badge mb-2">Our Vision</span>
            <h2 className="h4 fw-bold title-dark">Northern Kenya’s Most Trusted Analytics Hub</h2>
            <p className="body-copy mb-0">
              To be the leading regional center of excellence for empirical field research, local talent development, and evidence-based decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Core Values */}
      <div className="text-center mb-4">
        <h2 className="h4 fw-bold title-dark">Our Core Values</h2>
      </div>
      <div className="row g-4">
        {coreValues.map((coreValue, index) => (
          <div className="col-md-4" key={index}>
            <div className="about-card p-4 h-100 text-center">
              <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 value-icon-box">
                {coreValue.icon}
              </div>
              <h3 className="h5 fw-bold title-dark">{coreValue.title}</h3>
              <p className="body-copy small mb-0">{coreValue.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutus;