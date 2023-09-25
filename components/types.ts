import { IconType } from "react-icons"

export type SkillsPropsType  = {
    skills: SkillPropsType['skill'][]
}

export type SkillPropsType  = {
    skill: SkillType
}

export type SkillType = {
    id: string,
    name: string,
    icon: IconType
}

export type JobType = {
    company: string,
    title: string,
    time: string,
    tasks: string[],
    url: string
}
export type JobPropsType = {
    job: JobType
} 