import { skills } from "../data/skills";
import { skillLogos } from "../data/skillsLogos";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";

//Icons
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  {
    /* Category Labels */
  }
  const categoryLabels: Record<string, string> = {
    frontend: "Frontend Development",
    cms: "CMS & Page Builders",
    backend: "Backend Development",
    tools: "Tools & Workflow",
  };

  return (
    <>
      <div>
        <section
          id="Hero"
          className="max-lg:pb-10 min-h-screen flex items-center h-full pt-24 max-md:px-5 xl:px-10"
        >
          <div className="max-xl:gap-10 flex-col-reverse flex lg:flex-row items-center justify-center h-full w-full gap-20">
            <div className="flex max-w-[750px] lg:max-2xl:w-1/2 flex-col ">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Christian Coladilla
              </h1>
              <h2 className="text-xl font-bold">
                Web Developer | BSIT Graduate
              </h2>
              <p className="pt-10 text-lg font-medium">
                Web Developer specializing in responsive, high-performance
                websites and applications using React, TypeScript, Tailwind CSS,
                and WordPress. Experienced in delivering real-world client
                projects and company platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row pt-5 gap-5 max-sm:pt-10">

                <a
                  href="/assets/Coladilla_CV.pdf"
                  download="Christian-Coladilla-Resume.pdf"
                >
                  <button className="max-sm:w-full px-6 h-12 rounded-lg bg-black text-white flex items-center justify-center">
                    Download CV
                  </button>
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=iancoladilla23@gmail.com&su=Website%20Inquiry&body=Hi%20Christian,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="max-sm:w-full px-6 h-12 rounded-lg bg-black text-white flex items-center justify-center">
                    Get In Touch
                  </button>
                </a>

                <a
                  href="https://github.com/IPham23/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="max-sm:w-full h-12 rounded-lg bg-black text-white flex items-center justify-center">
                    <FaGithub size={30} />
                  </button>
                </a>

              </div>

            </div>
            <div className="flex max-lg:pt-5">
              <img
                src="/assets/hero/Hero-Image.jpg"
                alt="Hero Image"
                className="w-70 h-70 md:h-100 md:w-100 xl:h-125 xl:w-125 object-cover object-top rounded-full"
              />
            </div>
          </div>
        </section>
        <section
          id="About"
          className="max-md:px-5 max-2xl:pt-30 flex flex-col justify-center min-h-[50vh] pt-40 backdrop-brightness-95"
        >
          <div className="flex flex-col justify-center">
            <div className="pb-10">
              <h2 className="text-4xl font-bold text-center pb-2">About Me</h2>
              <p className="text-lg text-center opacity-70">
                My background, tools, and technical strengths as a web developer
              </p>
            </div>
            <div className="flex flex-col self-center md:max-w-[70%] 2xl:max-w-[50%] gap-5">
              <p className="text-xl text-center">
                I am a Bachelor of Science in Information Technology (BSIT)
                graduate from the Technological University of the Philippines –
                Manila. I have hands-on experience in frontend and backend
                development gained through academic work, thesis projects, and
                professional industry experience.
              </p>
              <p className="text-xl text-center">
                I currently work as a Web Developer, building responsive,
                user-centered websites using modern frameworks and CMS
                platforms. I enjoy translating UI designs into clean,
                maintainable, and scalable code.
              </p>
            </div>
          </div>

          {/*SKILLS CAROUSEL*/}
          <div className="max-sm:py-0 max-sm:mt-20 overflow-hidden w-full py-20 mt-20">
            <h3 className="text-2xl font-semibold text-center pb-2">
              Technologies I Work With
            </h3>
            <p className="text-center text-md opacity-70 pb-10 tracking-wide">
              These are the frameworks, tools, and platforms I use in real
              projects
            </p>

            <div className="relative max-sm:gap-5 flex w-max animate-scroll gap-10">
              {/* duplicate logos for seamless scroll */}
              {[...skillLogos, ...skillLogos].map((skill, i) => (
                <div
                  key={i}
                  className="max-sm:min-w-20 flex items-center justify-center min-w-35"
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="h-16 w-24 object-contain transition-transform hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Inline keyframes */}
            <style>{`
                            @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                            }
                            .animate-scroll {
                            animation: scroll 25s linear infinite;
                            }
                            .animate-scroll:hover {
                            animation-play-state: paused;
                            }
                        `}</style>
          </div>

          {/*SKILLS GRID*/}
          <div className="flex flex-col py-20 px-5 xl:px-10">
            <h3
              className="max-sm:text-2xl max-sm:font-medium max-sm:mb-10
                           text-3xl font-bold text-center mb-15"
            >
              What I Bring to the Table
            </h3>

            <div className="max-sm:gap-15 grid gap-8 lg:grid-cols-2 md:grid-cols-2 max-w-300 self-center">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold capitalize mb-4">
                    {categoryLabels[category] ?? category}
                  </h3>
                  <div className="space-y-3">
                    {items.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="p-4 lg:min-h-25 md:min-h-30 rounded-xl border bg-(--bg) hover:shadow-[0_4px_12px_var(--primary)] transition-all duration-300"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex gap-3">
                              <Icon className="text-2xl opacity-100" />
                              <h4 className="font-bold">{skill.name}</h4>
                            </div>
                            <div>
                              <span className="text-xs opacity-60 ">
                                Used in {skill.projects.length} project
                                {skill.projects.length > 1 ? "s" : ""}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm opacity-100 mt-2">
                            {skill.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*What I can do for your team*/}
          <div className="lg:px-50 lg:py-20">
            <h3 className="max-sm:text-2xl text-3xl font-bold text-center mb-4">
              What I Can Do for Your Team
            </h3>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Build responsive, mobile-first websites</li>
              <li>Convert Figma & Adobe XD designs into React applications</li>
              <li>
                Develop, customize, and maintain WordPress company websites
              </li>
              <li>
                Implement modern frontend frameworks (React, TypeScript) and
                backend services (PHP, Java, MySQL)
              </li>
              <li>
                Optimize websites for performance, accessibility, and SEO best
                practices
              </li>
            </ul>
          </div>

          {/*CTA */}
          <div className="max-md:mt-20 text-center my-10 space-y-10">
            <p className="max-sm:text-base text-lg opacity-80">
              I’m ready to contribute to your team’s frontend and full-stack
              projects. Let’s build something impactful together.
            </p>
            <button>
              <a href="#Contact">Contact Me</a>
            </button>
          </div>
        </section>

        {/*PROJECTS*/}
        <section id="Projects" className="max-md:px-5 max-2xl:py-30 py-40">
          <div className="max-w-[1400px] mx-auto lg:px-5 xl:px-10">
            {/* Section Header */}
            <div className="mb-14 text-center">
              <h2 className="max-sm:text-3xl text-4xl font-bold text-center pb-2 text-(--text)">
                Featured Projects
              </h2>
              <p className="mt-2 text-(--text) opacity-70 max-w-2xl mx-auto">
                Real-world projects showcasing my experience in building
                production-ready websites from design to deployment.
              </p>
            </div>

            {/* Grid */}
            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section
          id="Experience"
          className="max-md:px-5 max-2xl:py-30 py-40 max-w-full mx-auto backdrop-brightness-95"
        >
          <div className="mx-auto md:px-5 xl:px-10 max-w-[1400px]">
            <h2 className="max-sm:text-3xl text-4xl font-bold text-center pb-10">
              Career Overview
            </h2>
            <h2 className="text-3xl font-medium pb-5 underline underline-offset-5">
              Work Experience
            </h2>
            <div>
              <ExperienceSection />
            </div>

            <h2 className="text-3xl pt-10 font-medium pb-5 underline underline-offset-5">
              Education
            </h2>
            <div>
              <EducationSection />
            </div>
          </div>
        </section>
        <section id="Contact" className="max-md:px-5 max-md:py-30 py-40">
          <div className="max-sm:max-w-full max-sm:px-0 mx-auto max-w-6xl md:px-6">
            {/* divider */}
            <div className="flex justify-center mb-10">
              <span className="w-30 h-0.75 rounded-full bg-(--primary) opacity-70" />
            </div>

            {/* card */}
            <div
              className="max-sm:px-5 rounded-3xl bg-(--card-bg) p-14 text-center
                            shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >
              <p className="max-sm:text-3xl text-4xl font-bold pb-4">
                Let’s Get in Touch
              </p>

              <p className=" opacity-80 max-w-3xl mx-auto tracking-wide">
                For professional inquiries, opportunities, or collaborations,
                feel free to reach out via email or connect through any platform
                below.
              </p>

              {/* CTA line */}
              <p className="mt-5 text-md opacity-70 tracking-wider">
                Open to full-time roles, freelance projects, and collaborations.
              </p>

              {/* icons */}
              <div
                className="max-sm:flex-col max-sm:grid-cols-2 max-sm:justify-items-center 
                              grid sm:flex justify-center gap-6 mt-10"
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=iancoladilla23@gmail.com&su=Website%20Inquiry&body=Hi%20Christian,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-(--accent)
                            hover:bg-(--primary) transition-all duration-300
                            hover:-translate-y-1 shadow-md"
                >
                  <MdEmail className="h-6 w-6 text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/christian-coladilla-86494a264/"
                  target="_blank"
                  className="p-4 rounded-full bg-(--accent)
                            hover:bg-(--primary) transition-all duration-300
                            hover:-translate-y-1 shadow-md"
                >
                  <FaLinkedin className="h-6 w-6 text-white" />
                </a>

                <a
                  href="https://profile.indeed.com/p/christianc-yy6ybq6"
                  target="_blank"
                  className="p-4 rounded-full bg-(--accent)
                            hover:bg-(--primary) transition-all duration-300
                            hover:-translate-y-1 shadow-md"
                >
                  <SiIndeed className="h-6 w-6 text-white" />
                </a>

                <a
                  href="https://ph.jobstreet.com/profiles/christian-coladilla-8dn8prCkXd"
                  target="_blank"
                  className="p-4 rounded-full bg-(--accent)
                            hover:bg-(--primary) transition-all duration-300
                            hover:-translate-y-1 shadow-md"
                >
                  <img
                    src="/assets/JobStreetLogo.png"
                    alt="JobStreet"
                    className="h-6 w-6 brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
