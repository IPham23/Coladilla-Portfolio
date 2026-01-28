import {
  SiReact,
  SiTailwindcss,
  SiWordpress,
  SiPhp,
  SiMysql,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiElementor,
  SiWix,
  SiAdobexd,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";


import type { ComponentType } from "react"
import type { IconBaseProps } from "react-icons"


export type Skill = {
  name: string
  description: string
  projects: string[]
  icon: ComponentType<IconBaseProps>
}

export type Skills = {
  [category: string]: Skill[]
}


export const skills: Skills = {
  frontend: [
    {
      name: "HTML",
      description:
        "Semantic markup, accessibility, responsive layouts. Certified in Responsive Web Design.",
      projects: ["school-portfolio", "professional-portfolio", "school projects", "acca-concepts", "mrr", "travel-poc", "fnb-poc", "devs-ho-website", "herzy"],
      icon: SiHtml5,
    },
    {
      name: "CSS",
      description:
        "Responsive layouts, Flexbox, Grid, and animations. Certified in Responsive Web Design.",
      projects: ["school-portfolio", "professional-portfolio", "school projects", "acca-concepts", "mrr", "travel-poc", "fnb-poc", "devs-ho-website", "herzy"],
      icon: SiCss3,
    },
    {
      name: "JavaScript",
      description:
        "DOM manipulation, asynchronous logic, and interactive UI development. Certified in Responsive Web Design.",
      projects: ["school-portfolio", "professional-portfolio", "school projects", "acca-concepts", "mrr", "travel-poc", "fnb-poc", "devs-ho-website", "herzy"],
      icon: SiJavascript,
    },
    {
      name: "React",
      description: "Component-based UI, routing, modals, and galleries",
      projects: ["professional-portfolio", "hoda-rizk", "mrr-website", "personal-website"],
      icon: SiReact,
    },
    {
      name: "Tailwind CSS",
      description: "Responsive design, dark mode, and custom theming",
      projects: ["professional-portfolio", "hoda-rizk", "mrr-website", "personal-website"],
      icon: SiTailwindcss,
    },
    {
      name: "TypeScript",
      description: "Type-safe development for scalable React applications",
      projects: ["professional-portfolio", "hoda-rizk", "mrr-website", "personal-website"],
      icon: SiTypescript,
    },
  ],

  cms: [
    {
      name: "WordPress",
      description: "Custom themes, plugins, and site customization",
      projects: ["acca-concepts", "mrr", "travel-poc", "fnb-poc", "devs-ho-website", "herzy"],
      icon: SiWordpress,
    },
    {
      name: "Elementor",
      description: "Custom page building and layout design",
      projects: ["acca-concepts", "mrr", "travel-poc", "fnb-poc", "devs-ho-website", "herzy"],
      icon: SiElementor,
    },
    {
      name: "Wix",
      description: "Portfolio and business website development",
      projects: ["school-portfolio, school-projects"],
      icon: SiWix,
    },
  ],

  backend: [
    {
      name: "Java",
      description:
        "Application logic and system integration for a coin-operated printing kiosk",
      projects: ["kiosk-system"],
      icon: FaJava,
    },
    {
      name: "PHP",
      description: "Server-side logic and CMS customization",
      projects: ["school-projects", "kiosk-system", "wordpress-modification"],
      icon: SiPhp,
    },
    {
      name: "MySQL",
      description: "Relational database design and CRUD operations",
      projects: ["school-projects", "kiosk-system"],
      icon: SiMysql,
    },
  ],

  tools: [
    {
      name: "VS Code",
      description: "Primary development environment",
      projects: ["school-portfolio", "professional-portfolio", "school projects", "acca-concepts", "mrr", "travel-poc", "fnb-poc", "devs-ho-website", "herzy", "hoda-rizk", "kiosk-system", "personal-website"],
      icon: VscVscode,
    },
    {
      name: "Git",
      description: "Version control and collaborative workflows",
      projects: ["school-portfolio", "professional-portfolio", "school projects", "kiosk-system", "mrr-website", "hoda-rizk", "personal-website"],
      icon: SiGit,
    },
    {
      name: "Figma",
      description: "Design-to-code workflow and UI prototyping",
      projects: ["kiosk-system", "personal-website"],
      icon: SiFigma,
    },
    {
      name: "Adobe XD",
      description: "UI design and design-to-web implementation",
      projects: ["acca-concepts", "mrr", "travel-poc", "fnb-poc", "devs-ho-website", "herzy", "hoda-rizk", ],
      icon: SiAdobexd,
    },
  ],
}
