import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Styles from "./About.module.scss"
export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about/about.jpg" }) {
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
      <h1 className={Styles.heading}>about us</h1>
      <div className={Styles.imgContainer}>
        <Img
          objectFit="fill"
          className={Styles.img}
          fluid={data.about.childImageSharp.fluid}
        />
      </div>
      <p className={Styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
        voluptatem quis? Pariatur ipsa necessitatibus sequi ipsam quo minima
        quidem, obcaecati debitis illum sapiente molestiae commodi. Vel neque
        debitis omnis blanditiis, quasi facere autem qui repellendus eaque
        mollitia quod, sit doloremque dolores beatae adipisci voluptate
        cupiditate ad rerum, reiciendis quaerat nisi distinctio. Nam veritatis
        sed consequuntur, laboriosam ad optio. Illo qui nostrum est provident
        expedita consequuntur soluta natus earum rem, eveniet sit non ab
        voluptates aut, voluptatem ipsum repellendus quia id recusandae,
        delectus nobis repudiandae vero officiis consequatur! Asperiores,
        labore, accusantium animi nemo omnis dicta ut voluptate blanditiis
        magnam nesciunt cum! expedita consequuntur soluta natus earum rem,
        eveniet sit non ab voluptates aut, voluptatem ipsum repellendus quia id
        recusandae, delectus nobis repudiandae vero officiis consequatur!
        Asperiores, labore, accusantium animi nemo omnis dicta ut voluptate
        blanditiis magnam nesciunt cum!
      </p>
      <ul className={Styles.listContainer}>
        <li className={Styles.listItem}>
          <span className={Styles.bullet}>&#x25CF;</span>Lorem, ipsum dolor
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.bullet}>&#x25CF;</span>Lorem, ipsum dolor
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.bullet}>&#x25CF;</span>Lorem, ipsum dolor
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.bullet}>&#x25CF;</span>Lorem, ipsum dolor
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.bullet}>&#x25CF;</span>Lorem, ipsum dolor
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.bullet}>&#x25CF;</span>Lorem, ipsum dolor
        </li>
      </ul>
    </div>
  )
}
