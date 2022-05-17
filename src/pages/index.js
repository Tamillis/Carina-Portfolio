import * as React from "react"
import { Layout } from "../components/layout/Layout"
import ProfileImg from "../images/profile.jpg"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-center font-medium p-2">Hello Carina!</h1>
      <div className="flex flex-col text-9xl text-center text-txt rounded-full w-fit mx-auto bg-bgdark px-2 py-4">
        <p>洪</p>
        <p>儀</p>
        <p>娟</p>
        <img src={ProfileImg} alt="self-portrait" />
      </div>
      <p className="text-xl text-center underline px-6 py-2">This is your website!</p>
    </Layout>
  )
}

export default IndexPage
