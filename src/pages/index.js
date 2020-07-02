import React from "react"
import Layout from "../component/layout/Layout"
import LandingPage from "../component/LandingPage/LandingPage"
import Clients from "../component/clients/Clients"
import Services from "../component/OurServices/Services"

export default function Home() {
  return (
    <Layout>
      <LandingPage />
      <Services />
      <Clients />
    </Layout>
  )
}
