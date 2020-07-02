import React from "react"
import Styles from "./LandingPage.module.scss"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery } from "gatsby"

export default function LandingPage() {
  const data = useStaticQuery(graphql`
    query {
      landing: file(relativePath: { eq: "home/landing.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      className={Styles.landingContainer}
      fluid={data.landing.childImageSharp.fluid}
    >
      <h1 className={Styles.heading}>puja chemicals</h1>
      <p className={Styles.text}>
        Corrosion, deposition, fouling, and biological growth can derail your
        operations. Puja chemical’s combination of cooling tower treatment
        chemicals, software, monitoring and industry expertise can help prevent
        these issues or aid in the recovery from a failure event.
      </p>
    </BackgroundImage>
  )
}
