/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';


/*
 * Local Import
 */


/*
 * Component
 */
const Screen = ({ images, label }) => {
  const settings = {
    dynamicHeight: true,
    infiniteLoop: true,
    showArrows: true,
    showStatus: true,
    showThumbs: false,
    statusFormatter: (current, total) => `Slide : ${current} / ${total}`,
  };

  /*
   * View
   */
  return (
    <Element id="project-screen" name="project-screen">
      <h2 className="project-screen-title">
        Visuel de l'application
      </h2>
      <Carousel {...settings}>
        {images.map(image => (
          <img
            alt={`Illustration du projet ${label}`}
            className="project-screen-img"
            key={image.id}
            src={image.url}
          />
        ))}
      </Carousel>
    </Element>
  );
};

/*
 * PropTypes
 */
Screen.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  label: PropTypes.string.isRequired,
};


/*
 * Export
 */
export default Screen;
