/*
 * Package Import
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */
import ProjectCard from 'src/containers/Portfolio/ProjectCard';


/*
 * Component
 */
class Portfolio extends Component {
  /*
   * PropTypes
   */
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    projectsIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  }


  /*
   * LifeCycles
   */
  componentWillMount() {
    this.props.actions.getAllProjects();
  }


  /*
   * Render
   */
  render() {
    const { isFetching, projectsIds } = this.props;


    /*
   * View
   */

    // If Datas aren't load
    if (isFetching) {
      return (
        <div>
          En attente des données...
        </div>
      );
    }


    // If data are load
    return (
      <div id="portfolio">
        <h2 id="portfolio-title">Mes réalisations</h2>

        <p id="portfolio-desc">
          Si vous souhaitez des détails sur un projet, cliquez sur un des logos.
        </p>


        {/* All Projects */}
        <div id="all-projects">
          {projectsIds.map(projectById => (
            <ProjectCard key={projectById} projectById={projectById} />
          ))}
        </div>
      </div>
    );
  }
}


/*
 * Export
 */
export default Portfolio;
