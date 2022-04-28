import * as React from "react"
import { Layout } from "../components/layout/Layout"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1 class="text-6xl text-center text-pink-500 font-medium p-2">Hello Carina!</h1>
      <div class="flex flex-col text-9xl text- text-center rounded-full w-fit mx-auto text-white bg-pink-500 px-2 py-4">
        <p>洪</p>
        <p>儀</p>
        <p>娟</p>
      </div>
      <p class="text-xl text-pink-500 text-center underline px-6 py-2">This is your website!</p>
    </Layout>
  )
}

export default IndexPage
