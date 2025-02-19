import React from "react"
import "./Tips.css"

const Tips = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-5">
          <h1 className="display-3 text-black fw-bold text-uppercase">
            Dental care
            <br />
            <span className="text-primary">tips</span>
          </h1>

          <ul className="list-group">
            <li className="row d-flex align-items-center justify-content-evenly tips-list">
              <img
                src={`${process.env.PUBLIC_URL}/img/tooth_ok.svg`}
                alt="tooth"
                className="d-none d-md-block col-md-4 img-fluid tips-list-img"
              />
              <div className="col-12 col-md-8">
                <h2 className="fs-3">Brush your teeth twice a day</h2>
                <p className="mb-0 fs-5">
                  ✔ Brushing gently with a soft-bristled toothbrush.
                </p>
                <p className="mb-0 fs-5">
                  ✔ Brushing for at least 2 minutes, morning and evening.
                </p>
                <p className="mb-0 fs-5">
                  ✔ Cleaning your tongue to remove bacteria.
                </p>
              </div>
            </li>
            <li className="row d-flex align-items-center justify-content-evenly tips-list">
              <div className="col-12 col-md-8">
                <h2 className="fs-3">How Often to Change Your Toothbrush</h2>
                <p className="mb-0 fs-5">
                  You should replace your toothbrush every 2–3 months or sooner
                  if the bristles are frayed. After an illness, it’s best to
                  change your toothbrush immediately to prevent reinfection.
                </p>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/img/tooth_brush.svg`}
                alt="tooth"
                className="d-none d-md-block col-md-4 img-fluid tips-list-img bg-warning rounded-circle p-0"
              />
            </li>
            <li className="row d-flex align-items-center justify-content-evenly tips-list">
              <img
                src={`${process.env.PUBLIC_URL}/img/tooth_infected.svg`}
                alt="tooth"
                className="d-none d-md-block col-md-4 img-fluid tips-list-img"
              />
              <div className="col-12 col-md-8">
                <h2 className="fs-3">Foods to Avoid</h2>
                <p className="mb-0 fs-5">
                  ❌ Sugary drinks and sweets – they encourage bacteria growth.
                </p>
                <p className="mb-0 fs-5">
                  ❌ Acidic foods (citrus fruits, cola) – they can erode enamel.
                </p>
                <p className="mb-0 fs-5">
                  ❌ Hard candies and ice – they can cause mechanical damage to
                  teeth.
                </p>
              </div>
            </li>
            <li className="row d-flex align-items-center justify-content-evenly tips-list">
              <div className="col-12 col-md-8">
                <h2 className="fs-3">Using a Water Flosser</h2>
                <p className="mb-0 fs-5">
                  A water flosser enhances oral hygiene by removing plaque and
                  food debris from hard-to-reach areas. It’s ideal for braces,
                  implants, or sensitive gums. Use it daily, preferably after
                  brushing at night.
                </p>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/img/drop_water.svg`}
                alt="tooth"
                className="d-none d-md-block col-md-4 img-fluid tips-list-img"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Tips
