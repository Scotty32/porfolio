import React from "react"
import MyAvatar from "./MyAvatar"

export const NavBar = () => {
    return (
        <div className="navbar flex justify-center bg-base-100 fixed px-7 w-screen opacity-50">
            <div className="flex w-2/3 justify-between">
                <div>
                    {/* <MyAvatar/> */}
                    <a className="btn btn-ghost normal-case text-xl font-caveat">Enoch BROU</a>
                </div>
                <div className="text-center">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <span className="text-2xl">
                                Home
                            </span>
                        </li>
                        <li tabIndex={0}>
                            <span className="text-2xl">
                                Skills
                            </span>
                        </li>
                        <li>
                            <span className="text-2xl">
                                Experience
                            </span>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}