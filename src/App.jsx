import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Pricing from "./Pages/Pricing/Pricing"
import Contact from "./Pages/Contact/Contact"
import Tips from "./Pages/Tips/Tips"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tips" element={<Tips />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
