import React from "react"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image/withIEPolyfill"
import Styles from "./service.module.scss"

export default function Service({ img, text, left, right, heading }) {
  return (
    <Fade left={left} right={right}>
      <div className={Styles.cardContainer}>
        <Img className={Styles.img} fluid={img} objectPosition="center" />
        <div className={Styles.textContainer}>
          <h2 className={Styles.serviceHeading}>{heading}</h2>
          <p className={Styles.serviceDetail}>{text}</p>
        </div>
      </div>
    </Fade>
  )
}
