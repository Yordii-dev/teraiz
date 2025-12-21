import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import type { ImageMetadata } from "astro";
import type { Project } from "@/types/project";
import { categories } from "./project_data";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const ProjectCard = ({ project, index, onOpen }: ProjectCardProps) => {
  return (
    <div
      className="
     group
    relative
    overflow-hidden
    bg-white
    rounded-2xl
    border border-gray-100
    shadow-[0_8px_30px_rgb(0,0,0,0.04)]
    hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]
    cursor-pointer
    transition-all
    duration-300
    animate-fade-up
  "
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onOpen(project)}
    >
      <div className="aspect-[4/3] p-4 relative overflow-hidden">
        <div className="w-full h-full rounded-lg overflow-hidden bg-white flex items-center justify-center">
          <img
            src={project.cover.src}
            alt={project.title}
            className="group-hover:brightness-90 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

      {/* Content */}
      {/* <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="font-display text-xl text-primary-foreground font-semibold">
          {project.title}
        </h3>
      </div> */}
      {/* Bottom title reveal */}
      {/* Hover title */}
      <div
        className="
    absolute inset-x-0 bottom-0
    bg-white/90 backdrop-blur-sm
    px-5 py-4
    translate-y-full
    group-hover:translate-y-0
    transition-transform duration-500 ease-out
  "
      >
        <h3 className="font-display text-base md:text-lg font-semibold text-gray-900">
          {project.title}
        </h3>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
        <ZoomIn className="w-5 h-5 text-foreground" />
      </div>
    </div>
  );
};

export default ProjectCard;
