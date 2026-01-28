export type Education = {
    degree: string;
    school: string;
    schoolDuration: string;
    projectTitle: string;
    projectRole:string;
    projectDescription: string[];
    techUsed: string[];
}

export const education = [
    {
        degree:"Bachelor of Science in Information Technology (BSIT)",
        school:"Technological University of the Philippines – Manila",
        schoolDuration:"August 2019 – August 2023",
        projectTitle:"Thesis Project: Coin-Operated Printing Kiosk",
        projectRole:"Full-Stack Developer (Frontend & Backend)",
        projectDescription:["Designed and implemented a real-world self-service printing kiosk system",
            "Developed both frontend UI and backend system logic",
            "Built the printing workflow, including user input, payment handling, and print execution",
            "Focused on usability, reliability, and real-world deployment considerations"
        ],
        techUsed:["Java", "IntelliJ IDEA", "Linux", "Apache", "MySQL", "PHP", "Arduino Programming", "Orange Pi"]
    },
    {
        degree:"Information and Communications Technology (ICT Program)",
        school:"La Consolacion College – Caloocan",
        schoolDuration:"June 2017 – March 2019",
        projectTitle:"Major Project: Barangay Residents Profiling System",
        projectRole:"Frontend / UI–UX Developer",
        projectDescription:["Developed a desktop-based Barangay Residents Profiling System to improve record management",
            "Designed and implemented user-friendly UI/UX using Visual Basic",
            "Created structured forms for managing residents categorized as Minors, Adults, and Senior Citizens",
            "Implemented systematic storage of resident data including personal and demographic information",
            "Improved accessibility and workflow efficiency for barangay staff",
            "Supported better tracking of residents for government programs and community services"
        ],
        techUsed:["Visual Basic", "Microsoft Office Access"]
    }
];