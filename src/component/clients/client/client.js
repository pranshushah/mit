import React from "react"
import Styles from "./client.module.scss"
import Img from "gatsby-image/withIEPolyfill"

export default function Client({ img, text }) {
  return (
    <div className={Styles.imageContainer}>
      <Img
        fluid={img}
        className={Styles.img}
        objectFit="contain"
        objectPosition="center"
        alt="logo of client"
      />
      <p className={Styles.text}>{text}</p>
    </div>
  )
}
