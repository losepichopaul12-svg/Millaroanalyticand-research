import  { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setName("");
    setOrganization("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container section-1">
      <div className="text-center mb-5">
        <small className="text-uppercase fw-bold accent-label">
          Start a Conversation
        </small>
        <h1 className="h2 fw-bold mt-1 heading-dark">
          Contact Milaro Data Research
        </h1>
        <p className="mx-auto copy-muted intro-box">
          Reach out to discuss a survey, monitoring &amp; evaluation assignment, or custom data dashboard.
        </p>
      </div>

      <div className="row g-4 align-items-stretch">
        {/* Left Column: Lodwar Office Details */}
        <div className="col-lg-5">
          <div className="side-panel p-4 p-lg-5 h-100 shadow-sm">
            <h2 className="h4 fw-bold mb-3 text-white">Lodwar Head Office</h2>
            <p className="small text-light opacity-75 mb-4">
              Visit our office in Lodwar town or contact our coordination desk directly by phone or email.
            </p>

            <div className="d-flex flex-column gap-3 small">
              <div>
                <div className="side-label">Office Location</div>
                <div>Kanamkemer Road, Lodwar Town</div>
                <div className="opacity-75">Turkana County, Kenya</div>
              </div>

              <div>
                <div className="side-label">Phone</div>
                <div>+254 712 480 910</div>
              </div>

              <div>
                <div className="side-label">Email</div>
                <div>info@milaroresearch.co.ke</div>
              </div>

              <div>
                <div className="side-label">Working Hours</div>
                <div>Monday – Friday: 8:00 AM – 5:00 PM EAT</div>
                <div className="opacity-75">Saturday: By Appointment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive React Contact Form */}
        <div className="col-lg-7">
          <div className="main-card p-4 p-lg-5 h-100 shadow-sm">
            <h2 className="h4 fw-bold mb-3 heading-dark">Send Us a Message</h2>

            {formSubmitted && (
              <div
                className="alert alert-success d-flex align-items-center justify-content-between"
                role="alert"
              >
                <div>
                  <strong>Thank you!</strong> Your inquiry has been received by our Lodwar team. We will respond within 1 business day.
                </div>
                <button
                  type="button"
                  className="btn-close ms-3"
                  aria-label="Close"
                  onClick={() => setFormSubmitted(false)}
                />
              </div>
            )}

            <form onSubmit={handleContactSubmit}>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold heading-dark">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g., Sarah Ekai"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-semibold heading-dark">
                    Organization / NGO
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., Turkana Development Partners"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-semibold heading-dark">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  placeholder="name@organization.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="form-label small fw-semibold heading-dark">
                  Project Details / Message *
                </label>
                <textarea
                  rows="4"
                  required
                  className="form-control"
                  placeholder="Tell us about your research goals, target locations, or timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="btn action-btn px-4 py-2 rounded-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;