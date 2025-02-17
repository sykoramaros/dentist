import React from "react"

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-around mt-1 g-5">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 ">
            <div className="bg-success p-4 position-relative z-2 rounded-5">
              <h1 className="text-center display-4 text-white">Contact</h1>
              <ul className="list-group list-group-flush fs-4">
                <li className="list-group-item border-0 bg-success text-white">
                  <div className="d-flex align-items-center justify-content-start gap-4 border-bottom">
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/img/location.svg`}
                      alt="location"
                      width="60px"
                    />
                    <p>123 Anywhere Street, Any City, ST 12345</p>
                  </div>
                </li>
                <li className="list-group-item border-0 bg-success text-white">
                  <div className="d-flex align-items-center justify-content-start gap-4 border-bottom">
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/img/phone.svg`}
                      alt="location"
                      width="60px"
                    />
                    <p>123-456-7890</p>
                  </div>
                </li>
                <li className="list-group-item border-0 bg-success text-white">
                  <div className="d-flex align-items-center justify-content-start gap-4 border-bottom">
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/img/email.svg`}
                      alt="location"
                      width="60px"
                    />
                    <p>healthy@smile.com</p>
                  </div>
                </li>
                <li className="list-group-item border-0 bg-success text-white">
                  <div className="d-flex align-items-center justify-content-start gap-4 border-bottom">
                    <img
                      className="img-fluid"
                      src={`${process.env.PUBLIC_URL}/img/web.svg`}
                      alt="location"
                      width="60px"
                    />
                    <p>www.healthysmile.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="position-relative z-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2344.199570028322!2d18.120355787500046!3d49.82853847500404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szubar!5e0!3m2!1scs!2scz!4v1739825079375!5m2!1scs!2scz"
                title="dentist_location"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
