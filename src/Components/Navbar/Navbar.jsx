import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("text-secondary")

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm position-relative">
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/"}>
            <img
              className="position-absolute top-0 start-0"
              src={`${process.env.PUBLIC_URL}/img/dentist_logo.svg`}
              alt="Bootstrap"
              width="75"
              height="auto"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-4 fs-md-4 fs-lg-3 gap-0 gap-md-4 gap-lg-5 text-shadow text-uppercase d-flex align-items-center">
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    activeLink === "home" ? "text-primary" : "text-secondary"
                  }`}
                  aria-current="page"
                  to={"/"}
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    activeLink === "about" ? "text-primary" : "text-secondary"
                  }`}
                  to={"/about"}
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    activeLink === "pricing" ? "text-primary" : "text-secondary"
                  }`}
                  to={"/pricing"}
                  onClick={() => handleLinkClick("pricing")}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    activeLink === "contact" ? "text-primary" : "text-secondary"
                  }`}
                  to={"/contact"}
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
