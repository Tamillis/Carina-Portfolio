import * as React from "react"
import { Layout } from "../components/layout/Layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="text-center w-fit mx-auto p-2 rounded-lg bg-bg/50 text-txt">
        <h1 className="text-3xl">Page Not Found</h1>
        <p className="text-xl">Sorry :-(</p>
      </div>

    </Layout>
  )
}

export default NotFoundPage
