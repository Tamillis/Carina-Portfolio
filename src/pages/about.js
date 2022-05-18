import * as React from "react"
import { Layout } from "../components/layout/Layout"

// markup
const AboutPage = () => {
  return (
    <Layout>
      <h1 className="text-6xl text-center font-medium p-2">About Yi</h1>
      <p className="text-2xl text-center px-6 py-2">Open for commisions!</p>
      <p className="text-2xl text-center underline px-6 py-2">Custom Orders:</p>
      <div className="w-3/5 mx-auto bg-bgdark rounded-3xl">
        <ul className="list-none">
          <li><p className="text-2xl px-6 py-2">- Hand-drawn digital portraits l make from your photos (birthday cards / wedding posters / invitation cards / Events / phone wallpapers / profile photos / for gifts )</p></li>
          <li><p className="text-2xl px-6 py-2">- Graphic design (business designs/ events)</p></li>
          <li><p className="text-2xl px-6 py-2">- Illustrations</p></li>
        </ul>
      </div>
    </Layout>
  )
}

export default AboutPage