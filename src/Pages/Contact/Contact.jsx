import React from "react"
import { MapContainer, TileLayer, useMap } from "react-leaflet"

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center mt-5 m-md-0 g-5 border">
          <div className="col border"></div>
          <div className="col border"><MapContainer>
            </MapContainer></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
