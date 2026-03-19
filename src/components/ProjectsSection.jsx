import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";
import FeaturedProject from "./FeaturedProject";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="section-shell py-20 lg:py-24">
      <SectionHeading
        title="Projects & Implementations"
        subtitle="Selected projects showcasing real-world problem solving and practical system implementations."
      />

      <div className="space-y-24 lg:space-y-28">
        {projects.map((project, index) => (
          <FeaturedProject
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            duration={project.duration}
            category={project.category}
            highlights={project.highlights}
            techStack={project.technologies}
            githubLink={project.github}
            liveLink={project.demo}
            reverse={index % 2 === 1}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      github: PropTypes.string.isRequired,
      demo: PropTypes.string,
    }),
  ).isRequired,
};

export default ProjectsSection;
