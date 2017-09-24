/*
 * Package Import
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


/*
 * Local Import
 */
import Description from 'src/components/Description';
import Screen from './Screen';


/*
 * Component
 */
class Project extends Component {
  /*
   * PropTypes
   */
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    label: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imgPresentation: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }


  /*
   * LifeCycles
   */
  componentWillMount() {
    this.props.actions.getOneProject();
  }


  /*
   * Render
   */
  render() {
    const {
      label,
      logo,
      description,
      stack,
      url,
      imgPresentation,
      images,
      isFetching } = this.props;


    /*
     * View
     */
    if (isFetching) {
      return (
        <div>
          En attente des données...
        </div>
      );
    }


    return (
      <div id="project">

        {/* Back to Portfolio */}
        <NavLink to="/portfolio" id="project-link">
          <span id="project-link-puce" />
          Retour à la liste des projets
        </NavLink>


        {/* First party */}
        <div id="project-prez">

          {/* Container 1 - Desc + Stack + Button pour screen */}
          <div className="project-container">
            {/* Logo */}
            <img alt={`Logo du projet ${label}`} id="project-prez-logo" src={logo} />

            {/* Project's Title */}
            <h2 id="project-prez-label">
              {label}
            </h2>

            {/* Desc */}
            <Description title="Description de l'application" text={description} />

            {/* Stack */}
            <Description title="Environnement technique utilisé" text={stack} />

            {url !== '' &&
              <a id="project-prez-visite" href={url}>
                Visiter ce site !
              </a>
            }

            {/* Go to Screen */}
            <Link
              delay={250}
              duration={1250}
              id="project-prez-button"
              smooth
              spy
              to="project-screen"
            >
              <span id="project-prez-button-puce" />
              Voir les visuels
            </Link>
          </div>


          {/* Container 2 - Illustration du projet */}
          <div className="project-container">
            <img
              alt={`Illustration du projet ${label}`}
              id="project-prez-img"
              src={imgPresentation}
            />
          </div>
        </div>


        {/* Second party */}
        <Screen images={images} label={label} />
      </div>
    );
  }
}


/*
 * Export
 */
export default Project;
