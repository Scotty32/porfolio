import React from 'react'
import Skills from './Skills'
import { MySkills } from '../renderer/constants'
import { IconContext } from 'react-icons'

const SkillsSection = () => {
    return (
        <section className="w-full">
            <span className="block font-bold py-6">
                I'm skilled at
            </span>
            <IconContext.Provider
                value={
                    {'size': '3vw'}
                }
            >
                <Skills
                    skills={MySkills}
                />
            </IconContext.Provider>
        </section>
    )
}

export default SkillsSection