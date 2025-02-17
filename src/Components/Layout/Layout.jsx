import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Layout.css"

const Layout = () => {
  return (
    <div>
      <div
        className="main-card d-flex flex-column justify-content-between position-relative"
        style={{ overflow: "hidden" }}
      >
        <Navbar />
        <Outlet />
        <Footer />
        <div className="wave"></div>
        <img
          src={`${process.env.PUBLIC_URL}/img/wave-haikei.svg`}
          className="img-fluid w-100 position-absolute bottom-0 start-0 opacity-25"
          style={{ zIndex: "1", pointerEvents: "none" }}
        />
      </div>
    </div>
  )
}

export default Layout
