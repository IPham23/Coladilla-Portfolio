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
      description:["Develop and maintain production-level websites for company clients and internal platforms",
        "Designed and built the official Developers Hideout company website, from concept and UI to deployment",
        "Extended WordPress and Elementor functionality using custom JavaScript and CSS",
        "Converted legacy WordPress sites into modern React applications using TypeScript and Tailwind CSS",
        "Created Proof-of-Concept (POC) websites to showcase layouts, features, and technical feasibility for prospective clients",
        "Ensured fully responsive and cross-device compatibility across desktop, tablet, and mobile"
        ],
      techUsed:["React", "TypeScript", "Tailwind CSS", "WordPress", "Elementor", "JavaScript", "CSS", "HTML", "Visual Studio Code", "Git", "Adobe XD"]
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