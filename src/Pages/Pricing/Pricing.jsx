import React from "react"

const Pricing = () => {
  return (
    <div>
      <div className="container">
        <div
          className="row d-flex align-items-start justify-content-around mt-1 g-5"
          style={{ height: "auto" }}
        >
          <div className="col-12 col-lg-6">
            <ul className="fs-4">
              <h1 className="text-uppercase fs-3 mb-4">
                We work with the following insurance providers:
              </h1>
              <li>
                <p>Všeobecná zdravotní pojišťovna (VZP)</p>
              </li>
              <li>
                <p>Česká průmyslová zdravotní pojišťovna (ČPZP)</p>
              </li>
              <li>
                <p>Oborová zdravotní pojišťovna (OZP)</p>
              </li>
              <li>
                <p>Zdravotní pojišťovna Ministerstva vnitra ČR (ZP MV ČR)</p>
              </li>
            </ul>
          </div>
          {/* <div
            className="col-1 d-none d-md-block"
            style={{
              borderLeft: "1px solid black",
              height: "90%",
              width: "0",
              backgroundColor: "black",
            }}
          ></div> */}
          {/* <hr
            className="d-none d-md-block"
            style={{
              borderLeft: "300px solid red",
              border: "none",
              height: "90%",
            }}
            adafaag
          /> */}
          <div className="col-12 col-lg-6">
            <ul className="fs-4">
              <h1 className="text-uppercase fs-3 mb-4">
                Our Services and Prices:
              </h1>
              <li>
                <p>Preventive Check-up – 800 Kč</p>
              </li>
              <li>
                <p>Dental Cleaning – 1 500 Kč</p>
              </li>
              <li>
                <p>Filling – 2 500 Kč</p>
              </li>
              <li>
                <p>Tooth Extraction – 3 000 Kč</p>
              </li>
              <li>
                <p>Cavity Treatment – 2 000 Kč</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
