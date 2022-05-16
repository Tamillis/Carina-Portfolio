import * as React from "react"
export const Navbar = () => {
    return (
        <div className="sm:-translate-y-8 sm:hover:translate-y-0 transition-transform w-4/5 mx-auto rounded-b-full bg-bgdark text-sm sm:text-base text-txt flex justify-around">
            <a href="/" className="bg-white/10 px-2 rounded-full border-txt border my-2">Home</a>
            <a href="/about" className="bg-white/10 px-2 rounded-full border-txt border my-2">About</a>
            <a href="/portfolio" className="bg-white/10 px-2 rounded-full border-txt border my-2">Portfolio</a>
            <a href="mailto:carina@gmail.com" className="bg-white/10 px-2 rounded-full border-txt border my-2">Contact</a>
        </div>
    )
}