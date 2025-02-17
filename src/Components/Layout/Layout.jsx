import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Layout.css"

const Layout = () => {
  return (
    <div>
      <div className="main-card d-flex flex-column justify-content-between">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
