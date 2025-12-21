import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import type { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  /* Touch handlers (mobile swipe) */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > 50) {
      distance > 0 ? nextImage() : prevImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex md:items-center md:justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center z-[101] text-dark md:text-white"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Desktop arrows */}
      {project.images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center z-[101] text-white"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center z-[101] text-white"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}

      {/* Content */}
      <div
        className="relative max-w-5xl w-full animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col rounded-xl h-full shadow-hover bg-card overflow-hidden">
          {/* Image */}
          <div className="pt-8"></div>
          <div
            className="flex-grow p-4 md:p-0 h-[40vh] md:h-[60vh] flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={project.images[activeImageIndex].src}
              alt={project.title}
              className="max-h-full max-w-full object-contain transition"
            />
          </div>

          {/* Mobile dots */}
          {project.images.length > 1 && (
            <div className="flex justify-center gap-2 mt-3 md:hidden">
              {project.images.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full transition ${
                    index === activeImageIndex ? "bg-foreground" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Info */}
          <div className="flex flex-col justify-end p-4 md:p-8">
            <div className="flex justify-between items-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold">
                {project.title}
              </h2>

              <div className="w-16 h-16 rounded-sm border overflow-hidden bg-white">
                <img
                  src={project.cover.src}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="text-muted-foreground mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* Thumbnails (desktop only) */}
            {project.images.length > 1 && (
              <div className="hidden md:flex gap-3 mt-6 overflow-x-auto">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`rounded-lg overflow-hidden border transition ${
                      index === activeImageIndex
                        ? "border-accent"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
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
