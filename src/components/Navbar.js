import * as React from "react"
export const Navbar = () => {
    return (
        <div class="-translate-y-8 hover:translate-y-0 transition-transform w-4/5 mx-auto rounded-b-full bg-pink-500 text-white flex justify-around">
            <a href="/" class="bg-white/10 px-2 rounded-full border-white border my-2">Home</a>
            <a href="/About" class="bg-white/10 px-2 rounded-full border-white border my-2">About</a>
            <a href="/Portfolio" class="bg-white/10 px-2 rounded-full border-white border my-2">Portfolio</a>
            <a href="mailto:carina@gmail.com" class="bg-white/10 px-2 rounded-full border-white border my-2">Contact</a>
        </div>
    )
}