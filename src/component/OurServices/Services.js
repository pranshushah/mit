import React from "react"
import Styles from "./Services.module.scss"
import { useStaticQuery } from "gatsby"
import Service from "./service/service"

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      service1: file(relativePath: { eq: "home/service1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service2: file(relativePath: { eq: "home/service2.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>our Services</h1>
      <div className={Styles.cardsContainer}>
        <Service
          left
          right={false}
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, officia! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Architecto, officia!"
          heading="heading-1"
          img={data.service1.childImageSharp.fluid}
        />
        <Service
          left={false}
          right
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, officia! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Architecto, officia!"
          heading="heading-2"
          img={data.service2.childImageSharp.fluid}
        />
        <Service
          left
          right={false}
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, officia! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Architecto, officia!"
          heading="heading-1"
          img={data.service1.childImageSharp.fluid}
        />
        <Service
          left={false}
          right
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, officia! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Architecto, officia!"
          heading="heading-2"
          img={data.service2.childImageSharp.fluid}
        />
        <Service
          left
          right={false}
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, officia! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Architecto, officia!"
          heading="heading-1"
          img={data.service1.childImageSharp.fluid}
        />
        <Service
          left={false}
          right
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, officia! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Architecto, officia!"
          heading="heading-2"
          img={data.service2.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}
