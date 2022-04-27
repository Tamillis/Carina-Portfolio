import * as React from "react"
import { Navbar } from "../components/Navbar.js"

// markup
const AboutPage = () => {
  return (
    <main class="bg-cyan-200 h-screen">
      <Navbar />
      <h1 class="text-6xl text-center text-pink-500 font-medium p-2">About Carina</h1>
      <p class="text-xl text-pink-500 text-center underline px-6 py-2">This is your about page!</p>
    </main>
  )
}

export default AboutPage