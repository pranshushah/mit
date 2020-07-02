import React from "react"
import Styles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer id="contact" className={Styles.footerContainer}>
      <h1 className={Styles.title}>contact</h1>
      <address className={Styles.contactInfo}>
        <span> address: </span>
        <a
          className={Styles.link}
          title="puja chemicals Address"
          href="https://goo.gl/maps/en5Hu6UvsxEDdcgk7"
          target="_blank"
          rel="noreferrer"
          style={{ textTransform: "capitalize" }}
        >
          A-204, Bhavani Cross Rd, Sagrampura, Surat, Gujarat-395008
        </a>
      </address>
      <div className={Styles.contactInfo}>
        <span>email : </span>
        <a
          className={Styles.link}
          title="puja chemicals email"
          href="mailto:pranshu.shah23@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          pranshu.shah23@gmail.com
        </a>
      </div>
      <div className={Styles.contactInfo}>
        <span>mobile1 : </span>
        <a
          className={Styles.link}
          href="tel:+91 8780 883147"
          target="_blank"
          rel="noreferrer"
          title="puja chemicals mobile number"
        >
          +91 8780 883147
        </a>
        <span className={Styles.name}>(mit desai)</span>
      </div>
      <div className={Styles.contactInfo}>
        <span>mobile2 : </span>
        <a
          className={Styles.link}
          href="tel:+91 9033 154913"
          target="_blank"
          rel="noreferrer"
          title="puja chemicals mobile number-2"
        >
          +91 9033 154913
        </a>
        <span className={Styles.name}>(pranshu shah)</span>
      </div>
      <div className={Styles.contactInfo}>
        <span>whatsApp : </span>
        <a
          className={Styles.link}
          href="https://wa.me/918780883147"
          title="puja chemicals whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          +91 8780 883147
        </a>
        <span className={Styles.name}>(mit desai)</span>
      </div>
    </footer>
  )
}
