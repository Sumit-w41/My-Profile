import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaFacebook, FaLinkedin, FaInstagram, FaNode } from "react-icons/fa";

import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";

import { VscVscode, VscCommentUnresolved, VscTerminalPowershell } from "react-icons/vsc";

import { FaGitAlt, FaTwitter, FaDribbble, FaXTwitter } from "react-icons/fa6";

import dnsresolver from '../assets/images/dnsresolver.jpg'

import { MdGroups3 } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiScipy } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { SiAnaconda } from "react-icons/si";



// import Project_IMG_1 from '';
// import Project_IMG_2 from '';
// import Project_IMG_3 from '';
// import Project_IMG_4 from '';
// import Project_IMG_5 from '';
// import Project_IMG_6 from '';





export const Menu_Links = [
    { id: "home", label: "Home", offset: -130, to: "home" },
    { id: "skills", label: "Skills", offset: -150, to: "skills" },
    { id: "about", label: "About Me", offset: -150, to: "about" },
    { id: "projects", label: "Projects", offset: -150, to: "projects" },
    { id: "contact", label: "Contact", offset: -150, to: "contact" },

];



export const STATS = [
    { id: "01", count: "0", label: `Years of \nExperience (Fresher)` },
    { id: "02", count: "15", label: `Certifications \nEarned` },
    { id: "03", count: "12", label: `Projects \nCompleted` },
    { id: "04", count: "1*", label: `Rating \n(Codechef)` },

];

export const SKILL_TABS = [
    // {id:"01", label: "All", value:"all"},
    { id: "02", label: "Fullstack", value: "fullstack" },
    // {id:"03", label: "App Dev", value:"app"},
    // {id:"04", label: "", value:"database"},
    { id: "05", label: "Tools", value: "tools" },
    { id: "06", label: "DevOps", value: "devops" },
    { id: "07", label: "ML", value: "ml" },

];


export const SKILLS = [
    {
        id: "01",
        icon: FaHtml5,
        skill: "HTML",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "02",
        icon: FaCss3,
        skill: "CSS",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "03",
        icon: IoLogoJavascript,
        skill: "Javascript",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "04",
        icon: FaReact,
        skill: "React JS",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "05",
        icon: FaNode,
        skill: "Node JS",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "06",
        icon: SiExpress,
        skill: "Express JS",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "07",
        icon: SiMongodb,
        skill: "Mongo DB",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "08",
        icon: SiMysql,
        skill: "Mysql",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "9",
        icon: DiDjango,
        skill: "Django",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "10",
        icon: FaGitAlt,
        skill: "Git & Github",
        progress: 100,
        type: "tools",
        description: "Experienced in building scalable, component-driven web applications using React."
    },



    {
        id: "11",
        icon: SiFlask,
        skill: "Flask",
        progress: 100,
        type: "fullstack",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "12",
        icon: VscVscode,
        skill: "VSCode",
        progress: 100,
        type: "tools",
        description: "Experienced in building scalable, component-driven web applications using React."
    },


    {
        id: "13",
        icon: SiAnaconda,
        skill: "Anaconda",
        progress: 100,
        type: "tools",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "14",
        icon: FaPython,
        skill: "Python",
        progress: 100,
        type: "ml",
        description: "Experienced in building scalable, component-driven web applications using React."
    },


    {
        id: "15",
        icon: SiScipy,
        skill: "SciPy",
        progress: 100,
        type: "ml",
        description: "Experienced in building scalable, component-driven web applications using React."
    },



    {
        id: "16",
        icon: SiPytorch,
        skill: "PyTorch",
        progress: 100,
        type: "ml",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "17",
        icon: FaUbuntu,
        skill: "Ubuntu",
        progress: 100,
        type: "devops",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "18",
        icon: FaDocker,
        skill: "Docker",
        progress: 100,
        type: "devops",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "19",
        icon: SiKubernetes,
        skill: "Kubernetes",
        progress: 100,
        type: "devops",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "20",
        icon: FaJenkins,
        skill: "Jenkins",
        progress: 100,
        type: "tools",
        description: "Experienced in building scalable, component-driven web applications using React."
    },

    {
        id: "20",
        icon: FaReact,
        skill: "React Native",
        progress: 100,
        type: "app",
        description: "Experienced in building scalable, component-driven web applications using React."
    },




]



export const ABOUT_ME = {
    content: `I’m a recent graduate in Computer Science with a passion for building efficient and scalable software solutions. I specialize in Web Development, Data Structures, App Development and am eager to apply my knowledge to real-world projects. I’m a problem-solver at heart, driven by curiosity and a desire to learn new technologies. My approach focuses on clean code, effective collaboration, and continuous improvement.
    When I’m not coding, I enjoy exploring , which keeps me inspired and motivated.
    I’m excited to grow, contribute, and make an impact as a software engineer.`



    ,


    socialLinks: [
        { id: "01", label: "Facebook", icon: FaFacebook, link: "#" },
        { id: "02", label: "Instagram", icon: FaInstagram, link: "#" },
        { id: "03", label: "Twitter", icon: FaXTwitter, link: "#" },
        { id: "04", label: "LonkedIn", icon: FaLinkedin, link: "#" },
        { id: "05", label: "Dribble", icon: FaDribbble, link: "#" },
    ],

    email: "sumitpalariya30@gmail.com",
    phone: "45454545454",
    website: "knnifio.com",
}



export const PROJECTS = [
    {
        id: 1,
        title: "Iterative DNS resolver  | Javascript , Python",
        image : dnsresolver,
        tags: ["React", " Flask API"],
    },
    {
        id: 2,
        title: "Full Stack Notes App using Mern | MongoDB, Express, React JS, Node JS",
        // image : Project_IMG_1,
        tags: ["React", "Express.js", "MongoDB", Node.js],
    },

    {
        id: 3,
        title: "Full Stack Notes App using Mern | MongoDB, Express, React JS, Node JS",
        // image : Project_IMG_1,
        tags: ["React", "Express.js", "MongoDB", Node.js],
    },
    {
        id: 4,
        title: "Full Stack Notes App using Mern | MongoDB, Express, React JS, Node JS",
        // image : Project_IMG_1,
        tags: ["React", "Express.js", "MongoDB", Node.js],
    },
]



