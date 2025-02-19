import React from "react"

const About = () => {
  return (
    <div>
      <div className="container">
        <img
          src={`${process.env.PUBLIC_URL}/img/tooth_about.png`}
          alt="about"
          className="position-absolute bottom-0 start-0 h-75 w-auto z-2 me-auto opacity-25"
          style={{ pointerEvents: "none" }}
        />
        <div className="row d-flex align-items-center justify-content-around mt-5 position-relative mb-3">
          <div className="col-12 col-md-7">
            <p className="text-center text-shadow mx-auto fs-1 fst-italic w-75">
              "<span className="text-primary">Prevention</span> is the key to a
              <span className="text-primary"> healthy</span> smile."
            </p>
          </div>
          <div className="col-12 col-md-5 position-relative z-2">
            <div className="text-black">
              <h1 className="display-4 text-center text-md-end text-black fw-bold text-uppercase">
                About the <span className="text-primary">dentist</span>
              </h1>
              <h2 className="text-center text-md-end fs-1 fw-light mt-3">
                Dr. Open Mouth, DDS
              </h2>
              <p className="lead text-center text-md-end fs-4 mt-3">
                Dr. Mouth has 15 years of experience in preventive and
                restorative dentistry, focusing on long-term patient care with
                modern, comfortable approaches.
              </p>
              <p className="text-center text-md-end fst-italic fs-4">
                📅 Appointments: For existing patients only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
