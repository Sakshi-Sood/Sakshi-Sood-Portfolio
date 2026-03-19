import PropTypes from "prop-types";
import ProjectsSection from "./ProjectsSection";

const Projects = ({ data }) => {
  return <ProjectsSection projects={data.projects} />;
};

Projects.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        duration: PropTypes.string,
        description: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string),
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string.isRequired,
        demo: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default Projects;
