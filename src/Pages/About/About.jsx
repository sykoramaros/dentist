import React from "react"

const About = () => {
  return (
    <div>
      <div className="container">
        <img
          src={`${process.env.PUBLIC_URL}/img/tooth_about.png`}
          alt="about"
          className="position-absolute bottom-0 start-0 h-75 w-auto z-2 me-auto opacity-75"
          style={{ pointerEvents: "none" }}
        />
        <div className="row d-flex align-items-center justify-content-around mt-1 g-5 position-relative">
          <div className="col-12 col-md-6 "></div>
          <div className="col-12 col-md-6 position-relative z-2">
            <div className="text-end text-black ">
              <h1 className="display-4 text-black fw-bold text-uppercase">
                About the <span className="text-primary">dentist</span>
              </h1>
              <h2 className="fs-1 fw-light mt-4">Dr. Open Mouth, DDS</h2>
              <p className="lead ms-auto fs-4">
                A dentist with over 15 years of experience in preventive and
                restorative dentistry. Dr. Mouth focuses on long-term care for
                his patients, emphasizing comfort and modern approaches.
              </p>
              <p className="lead ms-auto fs-4">
                We prioritize trust, personalized care, and high-quality
                treatments.
              </p>
              <em className="ms-auto fs-4">
                📅 Appointments: For existing patients only.
              </em>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
