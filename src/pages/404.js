import React from "react"
import Layout from "../component/layout/Layout"
import { Link } from "gatsby"

export default function ErrorPage() {
  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <h1>404 - Oh Snap</h1>
        <h2>
          Couldn't find the page !!!
          <br />I will will guide you to the <Link href="/">Home</Link>
        </h2>
      </div>
    </Layout>
  )
}
