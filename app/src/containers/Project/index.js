/*
 * Package Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


/*
 * Local Import
 */
import Project from 'src/components/Project';
import { getOneProject } from 'src/store/middleware';

/*
 * Code
 */

// State
const mapStateToProps = (state) => {
  // eslint-disable-next-line max-len
  const { isFetching, label, logo, description, stack, url, source, imgPresentation, images } = state.project;

  return {
    isFetching,
    label,
    logo,
    description,
    stack,
    url,
    source,
    imgPresentation,
    images,
  };
};

// Actions
const mapDispatchToProps = (dispatch, { match }) => {
  const { id } = match.params;
  const actions = {
    getOneProject: getOneProject(id),
  };

  return {
    actions: bindActionCreators(actions, dispatch),
  };
};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ProjectContainer = withRouter(createContainer(Project));


/*
 * Export
 */
export default ProjectContainer;
