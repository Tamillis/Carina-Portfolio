import * as React from "react"
import { Layout } from "../components/layout/Layout"

// markup
const AboutPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-center font-medium p-2">About Yi</h1>
      <p className="text-2xl text-center px-6 py-2">Get a digital drawing of yourself in my style!</p>
      <p className="text-2xl text-center underline px-6 py-2">Contact Me:</p>
      <div className="w-3/5 mx-auto bg-bgdark rounded-3xl">
        <ul className="list-none text-center">
          <li><p className="text-2xl px-6 py-2">E-mail  - <a href="mailto:carina0425@gmail.com" className="font-bold">Carina0425@gmail.com</a></p></li>
          <li><p className="text-2xl px-6 py-2"><a href="https://instagram.com/yixplore?igshid=YmMyMTA2M2Y=">Instagram - @yixplore</a></p></li>
        </ul>
      </div>
    </Layout>
  )
}

export default AboutPage