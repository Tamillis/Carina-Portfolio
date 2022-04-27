import * as React from "react"
export const Navbar = () => {
    return (
        <div class="sm:-translate-y-8 sm:hover:translate-y-0 transition-transform w-4/5 mx-auto rounded-b-full bg-pink-500 text-sm sm:text-base text-white flex justify-around">
            <a href="/" class="bg-white/10 px-2 rounded-full border-white border my-2">Home</a>
            <a href="/about" class="bg-white/10 px-2 rounded-full border-white border my-2">About</a>
            <a href="/portfolio" class="bg-white/10 px-2 rounded-full border-white border my-2">Portfolio</a>
            <a href="mailto:carina@gmail.com" class="bg-white/10 px-2 rounded-full border-white border my-2">Contact</a>
        </div>
    )
}