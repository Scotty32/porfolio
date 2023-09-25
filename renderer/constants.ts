import { JobType, SkillType } from "../components/types";
import { FaSass } from "react-icons/fa"
import { SiNextdotjs, SiReact, SiJest, SiTailwindcss, SiLaravel, SiSymfony, SiGithub } from "react-icons/si"

export const MySkills: SkillType[] = [
    {
        id: "Next js",
        name: "Next js",
        icon: SiNextdotjs
    },{
        id: "react",
        name: "React js",
        icon: SiReact
    },{
        id: "sass",
        name: "sass",
        icon: FaSass
    },{
        id: "Jest",
        name: "Jest",
        icon: SiJest
    },{
        id: "tailwind",
        name: "tailwind",
        icon: SiTailwindcss,
    },{
        id: "Laravel",
        name: "Laravel",
        icon: SiLaravel
    },{
        id: "Symfony",
        name: "Symfony",
        icon: SiSymfony
    },{
        id: "Git",
        name: "Git",
        icon: SiGithub
    }
]

export const MyJobs: JobType[] = [
    {
        company: "CleanCall Ltd",
        title: "React Native Developer",
        time: "Nov 2021 - Jan 2022",
        tasks: [
            "Refacto components",
            "tsetsests",
            "asfafasfafa",
            "sgssegsgseg",
            "sfgsdgds"
        ],
        url: "https://cleancall.fr"
    },{
        company: "MintMe Company",
        title: "Symfony / Vue js Developer",
        time: "apr 2022 - present",
        tasks: [
            "Refacto components",
            "tsetsests",
            "asfafasfafa",
            "sgssegsgseg",
            "sfgsdgds"
        ],
        url: "https://mintme.com"
    }
]