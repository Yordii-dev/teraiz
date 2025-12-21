import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import type { ImageMetadata } from "astro";
import type { Project } from "@/types/project";

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
    bg-white
    border border-gray-200
    rounded-xl
    shadow-md
    hover:shadow-xl
    cursor-pointer
    transition-all
    duration-300
    animate-fade-up
  "
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onOpen(project)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.cover.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-terracotta-light text-sm font-medium tracking-wide uppercase mb-2">
          {project.category_id}
        </span>
        <h3 className="font-display text-xl text-primary-foreground font-semibold">
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
