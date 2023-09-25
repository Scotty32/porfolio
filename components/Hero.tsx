import React from "react"

export const Hero = () => {
    return (
        <div className="hero min-h-screen animate-background" style={{ backgroundImage: `url("../renderer/assets/hero-banner.png")` }}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="flex flex-col text-center text-neutral-content">
                <div className="h-1/2">
                    <p className="text-5xl font-bold">Hello i'm</p>
                    <h1 className="text-uppercase my-10 text-9xl font-caveat">ENOCH BROU</h1>
                    <h3 className="text-3xl">A softare Developer</h3>
                </div>
            </div>
        </div>
    )
}