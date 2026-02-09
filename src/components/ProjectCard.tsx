import { ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import { ImageModal }from "./ImageModal"

type Project = {
  title: string
  description: string
  image: string
  images: string[]
  tech: string[]
  liveUrl?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  {/* Disable body scroll when modal is open */}
    useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-(--card-bg) sm:mix-w-0 lg:min-w-75 border border-(--text) shadow-[5px_5px_10px_var(--primary)] 
                    transition-all duration-300 ease-in-out hover:shadow-[10px_10px_10px_var(--primary)] h-full"
    >
      
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-(--card-text) opacity-0 transition group-hover:opacity-4 cursor-pointer" 
          onClick={() => setOpen(true)}
        />
      </div>
      {/* MODAL (CONDITIONAL RENDER) */}
      {open && (
        <ImageModal
          images={project.images}
          onClose={() => setOpen(false)}
        />
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-(--card-text)">
            {project.title}
          </h3>

          <p className="text-sm text-(--card-text) opacity-70 leading-relaxed mt-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-(--card-bg) text-(--card-text) border border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-lg
                text-sm font-medium
                bg-(--primary) text-(--bg)!
                hover:bg-(--accent) hover:text-(--text)!
                transition
              "
            >
              Preview Site
              <ExternalLink size={16} />
            </a>
          ) : (
            <span
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-lg
                text-sm font-medium
                bg-neutral-500/20 text-neutral-400
                cursor-not-allowed
              "
            >
              Client Site Offline
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
