import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Styles from "./Nav.module.scss"
import Img from "gatsby-image/withIEPolyfill"

export default function Nav() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo32.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <nav className={Styles.navContainer}>
      <Link to="/" className={Styles.ImgContainer}>
        <Img
          fluid={data.logo.childImageSharp.fluid}
          objectFit="contain"
          className={Styles.Img}
        />
      </Link>

      <ul className={Styles.navLinks}>
        <li className={Styles.linkContainer}>
          <Link
            to="/"
            className={Styles.link}
            activeClassName={Styles.activeNavLink}
          >
            home
          </Link>
        </li>
        <li className={Styles.linkContainer}>
          <Link
            to="/about"
            className={Styles.link}
            activeClassName={Styles.activeNavLink}
          >
            about
          </Link>
        </li>
        <li className={Styles.linkContainer}>
          <Link
            to="#contact"
            className={Styles.link}
            activeClassName={Styles.activeNavLink}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
