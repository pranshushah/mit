import React from "react"
import Styles from "./Clients.module.scss"
import { useStaticQuery } from "gatsby"
import Client from "./client/client"

export default function Clients() {
  const data = useStaticQuery(graphql`
    query {
      amazon: file(relativePath: { eq: "clients/amazon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apple: file(relativePath: { eq: "clients/apple.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coca: file(relativePath: { eq: "clients/coca-cola.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      google: file(relativePath: { eq: "clients/google.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      microsoft: file(relativePath: { eq: "clients/microsoft.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toyota: file(relativePath: { eq: "clients/toyota.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Our Clients</h1>
      <div className={Styles.imagesContainer}>
        <Client
          img={data.amazon.childImageSharp.fluid}
          text="Lorem ipsum dolor "
        />
        <Client
          img={data.apple.childImageSharp.fluid}
          text="Lorem ipsum dolor "
        />
        <Client
          img={data.coca.childImageSharp.fluid}
          text="Lorem ipsum dolor "
        />
        <Client
          img={data.google.childImageSharp.fluid}
          text="Lorem ipsum dolor "
        />
        <Client
          img={data.microsoft.childImageSharp.fluid}
          text="Lorem ipsum dolor "
        />
        <Client
          img={data.toyota.childImageSharp.fluid}
          text="Lorem ipsum dolor "
        />
      </div>
    </div>
  )
}
