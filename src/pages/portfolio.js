import * as React from "react"
import { Layout } from "../components/layout/Layout"

// markup
const PortfolioPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-center font-medium p-2">My Portfolio</h1>
      <p className="text-xl text-center underline px-6 py-2">This is your proftolio, Carina, let me know what pictures you want here.</p>
      <p className="text-xl text-center underline px-6 py-2">Example Image</p>
      <img src="https://picsum.photos/200" alt ="" className="mx-auto"></img>
    </Layout>
  )
}

export default PortfolioPage