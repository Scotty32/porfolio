import React from 'react'
import { SkillPropsType } from './types'

export const SkillBadge = ({skill}: SkillPropsType) => {
    const {icon: Icon} = skill 
    return (
        <div className="w-full shadow-primary bg-white p-5 rounded-lg skill-card flex relative justify-center items-center overflow-hidden text-primary gap-4">
            <Icon/>
            <span className="flex text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                <span className="text-base lg:text-lg xl:text-xl font-serif font-bold">{skill.name}</span>
            </span>
        <div className="skill-card__underline absolute bottom-0 left-0 w-full bg-primary h-0.75 transform -translate-x-full transition-transform duration-300"></div></div>
    )
}
