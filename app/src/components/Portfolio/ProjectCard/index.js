/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


/*
 * Local Import
 */


/*
 * Component
 */
const ProjectCard = ({ id, slug, label, logo }) => (
  <div className="one-project">

    <Link to={`/project/${id}/${slug}`}>
      <div className="one-project-content">
        <img
          alt={`Visuel du projet ${label}`}
          src={logo}
          className="one-project-content-image"
        />
        <div className="one-project-icon" />
      </div>
    </Link>

    <div className="one-project-label">
      {label}
    </div>

  </div>
);


ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};


/*
 * Export
 */
export default ProjectCard;
