/*
 * Package Import
 */
import { connect } from 'react-redux';


/*
 * Local Import
 */
import ProjectCard from 'src/components/Portfolio/ProjectCard';


/*
 * Code
 */

// State
const mapStateToProps = (state, { projectById }) => {
  const { id, slug, label, logo } = state.portfolio.byId[projectById];

  return { id, slug, label, logo };
};

/*
 * Component
 */
const createContainer = connect(mapStateToProps);
const ProjectCardContainer = createContainer(ProjectCard);

/*
 * Export
 */
export default ProjectCardContainer;
