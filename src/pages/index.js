import * as React from "react"
import { Layout } from "../components/layout/Layout"
import ProfileImg from "../images/profile.jpg"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-center font-medium p-2">I’m Yi | Taiwanese | Digital Art</h1>
      <div className="flex flex-col text-9xl text-center text-txt rounded-full w-fit mx-auto bg-bgdark px-2 py-4">
        <img className="rounded-full sm:w-full" src={ProfileImg} alt="self-portrait"/>
      </div>
      <p className="text-2xl text-center px-6 py-2"><a href="/about" className="font-semibold">Get</a> a digital drawing of yourself in my style!</p>
    </Layout>
  )
}

export default IndexPage
