import React from "react"
import Nav from "../Nav/Nav"
import "./layout.scss"
import Styles from "./layout.module.scss"
import Footer from "../Footer/Footer"

function Layout({ children }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
