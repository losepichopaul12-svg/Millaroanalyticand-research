import React from "react";
import "./Team.css";

function Team() {
  const members = [
    {
      name: "Dimphine Epetet",
      role: "Lead Data Analyst",
      bio: "Specializes in statistical modeling and socio-economic surveys across Northern Kenya. Brings 7+ years turning field datasets into policy insights.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      initials: "DE",
    },
    {
      name: "Boaz Ibuya",
      role: "Field Operations Coordinator",
      bio: "Manages trained enumerator teams across all 7 Turkana sub-counties. Expert in mobile data collection logistics and community engagement.",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
      initials: "BI",
    },
    {
      name: "Loreng Gerald",
      role: "M&E Specialist",
      bio: "Designs baseline, midline, and endline evaluation frameworks for humanitarian NGOs, county programs, and livelihood initiatives.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      initials: "LG",
    },
    {
      name: "Dr.Eriong`oa Kanyamann,PHD",
      role: "ICT & Systems Lead",
      bio: "Builds digital KoboToolbox/ODK questionnaires, automated validation checks, and interactive visual dashboards for partner organizations.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      initials: "EK",
    },
  ];

  return (
    <div className="container team-section">
      <div className="text-center mb-5">
        <small className="text-uppercase fw-bold team-eyebrow">
          The People Behind the Data
        </small>
        <h1 className="h2 fw-bold team-heading mt-1">Meet Our Team</h1>
        <p className="team-copy mx-auto team-intro">
          A dedicated team of statisticians, field coordinators, and ICT
          specialists based in Lodwar.
        </p>
      </div>

      <div className="row g-4">
        {members.map((member, index) => (
          <div className="col-sm-6 col-lg-3" key={index}>
            <div className="team-card h-100 d-flex flex-column shadow-sm">
              <div className="team-avatar-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-avatar-img"
                />
                <span className="team-initials-badge">{member.initials}</span>
              </div>
              <div className="p-4 d-flex flex-column flex-grow-1">
                <h2 className="h5 fw-bold team-heading mb-1">{member.name}</h2>
                <p className="small team-role mb-2">{member.role}</p>
                <p className="small team-copy mb-0">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;