
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-4 mt-auto border-top border-secondary"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="container">
        <div className="row g-4 pb-4 border-bottom border-secondary">
          {/* Column 1: Brand & Lodwar Office Info */}
          <div className="col-md-4">
            <div className="fw-bold fs-5 mb-2">
              MILARO <span style={{ color: "#D97706" }}>DATA RESEARCH</span>
            </div>
            <p className="small text-light opacity-75 mb-3">
              Empirical field data collection, statistical analysis, and M&amp;E reporting based in Lodwar, Turkana County, Kenya.
            </p>
            <div className="small text-light opacity-75">
              <i className="bi bi-geo-alt-fill me-2" style={{ color: "#D97706" }}></i>
              Lodwar Town, Turkana County, Kenya
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="col-md-4">
            <h5
              className="h6 fw-bold text-uppercase mb-3"
              style={{ color: "#D97706" }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled vstack gap-2 small mb-0">
              <li>
                <Link className="text-decoration-none text-white fw-semibold" to="/Home">
                  <i className="bi bi-house-door me-2" style={{ color: "#D97706" }}></i>
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-white fw-semibold" to="/Aboutus">
                  <i className="bi bi-info-circle me-2" style={{ color: "#D97706" }}></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-white fw-semibold" to="/Ourservices">
                  <i className="bi bi-bar-chart-line me-2" style={{ color: "#D97706" }}></i>
                  Our Services
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-white fw-semibold" to="/Team">
                  <i className="bi bi-people me-2" style={{ color: "#D97706" }}></i>
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-white fw-semibold" to="/Contactus">
                  <i className="bi bi-envelope me-2" style={{ color: "#D97706" }}></i>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social Links */}
          <div className="col-md-4">
            <h5
              className="h6 fw-bold text-uppercase mb-3"
              style={{ color: "#D97706" }}
            >
              Connect With Us
            </h5>
            <ul className="list-unstyled vstack gap-2 small text-light opacity-75 mb-3">
              <li>
                <i className="bi bi-envelope me-2"></i>
                Millaro.arc@gmail.com
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i>
                +254 740--757340
              </li>
            </ul>
            <div className="d-flex flex-wrap gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-3 px-3"
              >
                <i className="bi bi-linkedin me-1"></i> LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-3 px-3"
              >
                <i className="bi bi-twitter-x me-1"></i> X
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-3 px-3"
              >
                <i className="bi bi-twitter-x me-1"></i>facebook
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-3 px-3"
              >
                <i className="bi bi-twitter-x me-1"></i>tiktok
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-light rounded-3 px-3"
              >
                <i className="bi bi-twitter-x me-1"></i> whatsapp
              </a>
              <a
                href="mailto:info@milaroresearch.co.ke"
                className="btn btn-sm fw-semibold rounded-3 px-3"
                style={{ backgroundColor: "#D97706", color: "#0F172A" }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="pt-3 text-center small text-light opacity-50">
          &copy; {new Date().getFullYear()} Millaro Analytic,Research &Consultancy• Lodwar, Turkana County, Kenya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;