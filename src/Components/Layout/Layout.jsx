import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Layout.css"

const Layout = () => {
  return (
    <div>
      <div className="main-card">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
