import {Outlet,Link } from "react-router-dom";

function Navbar(){


  return (
     <>
<nav className="navbar navbar-expand-lg bg-success custom-navbar">
  <div className="container">
          
    {/* logo symbol */}
    <Link className="navbar-brand text-white" to="/Home">Millaro Analytic And Research </Link>

    {/* Hamburger Button */}
    <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    >
    <span className="navbar-toggler-icon"></span>
   </button>
          

   {/* Links */}
   <div className="collapse navbar-collapse" id="navbarNav">
   <ul className="navbar-nav ms-auto">
   <li className="nav-item">
   <Link className="nav-link text-white fw-bolder " to="/Home"> 
   <i class="bi bi-house-check me-2"></i> Home</Link>
   </li>
   <li className="nav-item">
   <Link className="nav-link text-white fw-bolder "to="/Aboutus"> 
   <i className="bi bi-briefcase-fill me-2"></i>About Us</Link>
   </li>
  <li className="nav-item">
  <Link className="nav-link text-white fw-bolder " to="/Ourservices"> 
  <i className="bi bi-box-arrow-in-right me-2"></i>Services</Link>
  </li>
  <li className="nav-item">
  <Link  className="nav-link text-white fw-bolder  " to="/Team"> 
  <i class="bi bi-person-badge-fill me-2"></i>Team</Link>
  </li>
  <li className="nav-item">
  <Link  className="nav-link text-white fw-bolder  " to="/Contactus"> 
  <i class="bi bi-person-badge-fill me-2"></i>Contact us</Link>
  </li>
  </ul>
  </div>
  </div>
  </nav>
  <Outlet />
</>
  );
}

export default Navbar;