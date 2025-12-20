import { useState } from "react";
import ProjectCard from "./gallery/ProjectCard";
import ProjectModal from "./gallery/ProjectModal";
import { categories, projects } from "./gallery/project_data";

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === 1
      ? projects
      : projects.filter((p) => p.category_id === selectedCategory);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id
    );
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <section id="systems" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3">
            Sistemas desarrollados
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Plataformas y sistemas en producción desarrollados durante los
            últimos 10 meses de 2025, como parte de procesos reales de negocio.
          </p>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
          relative px-5 py-2.5 rounded-full text-sm font-medium
          transition-all
          ${
            isActive
              ? `
                gradient-hero
                shadow-lg scale-[1.03]
                ring-2 ring-brand-secondary/40
              `
              : `
                bg-card text-muted-foreground
                hover:text-foreground hover:bg-sand-dark
              `
          }
        `}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default ProjectGallery;
