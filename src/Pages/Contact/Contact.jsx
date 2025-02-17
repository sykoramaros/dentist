import React from "react"

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center mt-5 m-md-0 g-5 border">
          <div className="col border"></div>
          <div className="col border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2344.199570028322!2d18.120355787500046!3d49.82853847500404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szubar!5e0!3m2!1scs!2scz!4v1739825079375!5m2!1scs!2scz"
              title="dentist_location"
              width="100%"
              height="450px"
              style={{ border: "0", zIndex: "2" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
