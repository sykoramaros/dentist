import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center mt-5 m-md-0 g-5">
          <div className="col">
            <h1 className="display-3 text-black fw-bold text-uppercase">
              Dental care
              <br />
              <span className="text-primary">Clinic</span>
            </h1>
            <p className="lead w-75">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              doloribus quae illo, velit repellat accusamus iure ut, beatae.
            </p>
            <Link
              to="/contact"
              className="btn btn-lg btn-primary fw-bold text-uppercase rounded-5 mt-5"
            >
              dental care tips &nbsp;&nbsp;→
            </Link>
          </div>
          <div className="col">
            <img
              src={`${process.env.PUBLIC_URL}/img/dentist_home.png`}
              alt="dentist"
              className="img-fluid w-auto mx-auto d-block"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
