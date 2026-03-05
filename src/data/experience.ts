export type Experience = {
    position: string;
    company: string;
    duration: string;
    description: string[];
    techUsed: string[];
}

export const experience = [
    {
      position:"Web Developer",
      company:"Developers Hideout PH Web Programming Services",
      duration:"June 2024 - Present",
      description:["Architect and deliver end-to-end production websites for diverse clients using React, TypeScript, Tailwind CSS, Laravel, and REST APIs, ensuring scalable and maintainable codebases",
        "Designed and launched the official Developers Hideout company website from initial concept through to live deployment, serving as both lead developer and primary designer",
        "Migrated multiple client WordPress sites to modern React + TypeScript + Tailwind CSS stack, significantly improving load times, SEO performance, and long-term maintainability",
        "Developed and customized WordPress websites using Elementor Pro, delivering tailored page layouts and advanced design components for client brands",
        "Integrated REST APIs to connect frontend applications with backend services, enabling dynamic content rendering and streamlined data workflows",
        "Built and maintained headless WordPress architectures, decoupling the CMS from the frontend for improved performance and developer flexibility",
        "Constructed responsive, cross-browser-compatible layouts optimized for all screen sizes, consistently meeting client design specifications",
        "Produced polished proof-of-concept websites for client pitches, directly supporting the company’s business development and sales process",
        ],
      techUsed:["React", "TypeScript", "Rest API", "Tailwind CSS", "WordPress", "Elementor", "JavaScript", "CSS", "HTML", "Visual Studio Code", "Git", "PHP", "MySQL", "Adobe XD", "Figma"]
    },
    {
      position:"IT Intern",
      company:"Reed Elsevier Shared Services Philippines Inc.",
      duration:"March 2023 – June 2023",
      description:["Provided technical support for hardware, software, and network-related issues in a corporate environment",
        "Reimaged company laptops and desktops using standardized deployment procedures for employee onboarding and replacement units",
        "Prepared devices for production use, including OS installation, configuration, and system updates",
        "Joined and managed devices within the Active Directory domain, ensuring proper domain assignment and user access",
        "Assisted in maintaining IT asset readiness for deployment across departments",
        "Assisted employees with system troubleshooting, installations, and maintenance",
        "Supported internal IT operations, ensuring minimal downtime and efficient issue resolution"
      ],
      techUsed:["Windows", "Linux", "Microsoft Office", "Active Directory", "Microsoft SQL Server", "Jira"]
    }
];