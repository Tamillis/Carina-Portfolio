import * as React from "react"
import { Layout } from "../components/layout/Layout"

// markup
const PortfolioPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-center text-pink-500 font-medium p-2">Carina's Portfolio</h1>
      <p className="text-xl text-pink-500 text-center underline px-6 py-2">This is your proftolio.</p>
      <p className="text-xl text-pink-500 text-center underline px-6 py-2">Example Image</p>
      <img src="https://picsum.photos/200" alt ="" className="mx-auto"></img>
    </Layout>
  )
}

export default PortfolioPage