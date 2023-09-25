import React from 'react'
import MyAvatar from './MyAvatar'

const Description = () => {
  return (
    <div className="flex items-center justify-between bg-base-100 py-12 px-10 shadow-xl">
        <MyAvatar/>
        <div className="w-2/3 font-serif text-base sm:text-lg xl:text-xl leading-10 sm:leading-12 xl:leading-12">
            <span className="card-title">Hello, buddy... </span> <br/> This is
            <span className="font-bold text-primary text-xl md:text-2xl lg:text-3xl">&lt;ScottDev /&gt;</span>
            I build things for the web. Currently, I am working as a<span className="font-bold">Software Developer (Fullstack JS/PHP) on </span>
            <a className="font-bold underline" href="https://www.mintme.com" target="_blank" rel="noreferrer">Mintme project</a>, a leading Crypto Exchange. I am helping my team build a robust and flexible <span className="font-bold">Vue Js Components</span> and Middlend Architecture with 
            <span className="font-bold"> Symfony</span>
        </div>
    </div>
  )
}

export default Description