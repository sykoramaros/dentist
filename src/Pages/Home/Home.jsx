import React from "react"

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center border mt-5 m-md-0">
          <div className="col border">
            <h1 className="display-3 text-black fw-bold text-uppercase">
              Dental care
              <br />
              <span className="text-primary">Clinic</span>
            </h1>
            <p className="lead border w-75">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              doloribus quae illo, velit repellat accusamus iure ut, beatae.
            </p>
          </div>
          <div className="col border">
            <img
              src={`${process.env.PUBLIC_URL}/img/dentist_home.png`}
              alt="dentist"
              className="img-fluid w-75 mx-auto d-block"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
