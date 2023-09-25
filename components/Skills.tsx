import React from 'react'
import { SkillsPropsType } from './types'
import { SkillBadge } from './SkillBadge'

const Skills = ({skills}: SkillsPropsType) => {
    
    return (
        <main className="w-full">
            <ul className="grid grid-cols-4 gap-10">    
                {skills.map((skill) => (
                    <li className="">
                        <SkillBadge skill={skill}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Skills