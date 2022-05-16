import * as React from "react"
import { Layout } from "../components/layout/Layout"

// markup
const AboutPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-center text-pink-500 font-medium p-2">About Carina</h1>
      <p className="text-xl text-pink-500 text-center underline px-6 py-2">This is your about page!</p>
    </Layout>
  )
}

export default AboutPage