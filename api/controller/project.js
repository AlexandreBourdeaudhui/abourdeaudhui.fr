/*
 * Package Import
 */


/*
 * Local Import
 */
import projects from '../data/projects.json';


/*
 * Export
 */
export default (request, response) => {
  /*
   * Get Project By ID.
   */
  const { id } = request.params;

  // Have I a project with this ID ?
  const oneProject = projects.filter(project => (
    project.id === parseInt(id, 10)
  ));

  // If project match with an ID
  if (oneProject.length) {
    response.send(oneProject[0]);
  }
};
