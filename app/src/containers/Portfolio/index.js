/*
 * Package Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local Import
 */
import Portfolio from 'src/components/Portfolio';
import { getAllProjects } from 'src/store/middleware';


/*
 * Code
 */

// State
const mapStateToProps = state => ({
  isFetching: state.portfolio.isFetching,
  projectsIds: state.portfolio.allIds,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAllProjects }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const PortfolioContainer = createContainer(Portfolio);


/*
 * Export
 */
export default PortfolioContainer;
