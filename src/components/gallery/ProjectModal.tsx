import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { ImageMetadata } from "astro";
import type { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectModal = ({
  project,
  onClose,
  onNext,
  onPrev,
}: ProjectModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  /* Reset image index when project changes */
  useEffect(() => {
    if (project) setActiveImageIndex(0);
  }, [project]);

  /* Keyboard + scroll lock */
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight") {
        // siguiente imagen del mismo proyecto
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
      }

      if (e.key === "ArrowLeft") {
        // imagen anterior del mismo proyecto
        setActiveImageIndex(
          (prev) => (prev - 1 + project.images.length) % project.images.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full
               flex items-center justify-center z-[101] text-white"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveImageIndex(
            (prev) => (prev - 1 + project.images.length) % project.images.length
          );
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12
             rounded-full flex items-center justify-center
             z-[101] text-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveImageIndex((prev) => (prev + 1) % project.images.length);
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12
             rounded-full flex items-center justify-center
             z-[101] text-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-xl overflow-hidden shadow-hover bg-card">
          {/* Main image */}
          <img
            src={project.images[activeImageIndex].src}
            alt={project.title}
            className="w-full mt-4 max-h-[60vh] object-contain bg-card"
          />

          {/* Content */}
          <div className="p-6 md:p-8">
            <span className="text-accent text-sm font-medium tracking-wide uppercase">
              {project.category_id}
            </span>

            <h2 className="font-display text-2xl md:text-3xl font-semibold mt-2">
              {project.title}
            </h2>

            <p className="text-muted-foreground mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* Gallery thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-3 mt-6 overflow-x-auto">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`rounded-lg overflow-hidden border transition
                      ${
                        index === activeImageIndex
                          ? "border-accent"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }
                    `}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-20 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
