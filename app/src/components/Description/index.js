/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';


/*
 * Local Import
 */


/*
 * Code
 */
const createSanitizeRender = (dirtyHTML) => {
  const html = sanitizeHtml(dirtyHTML, {
    allowedTags: ['a', 'strong', 'br'],
    allowedAttributes: {
      a: ['href', 'name', 'target'],
    },
  });

  return { __html: html };
};


/*
 * Component
 */
const Description = ({ title, text }) => (
  <div className="description">
    <h2 className="description-title">
      {title}
    </h2>

    <p
      className="description-text"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={
        createSanitizeRender(text)
      }
    />
  </div>
);


/*
 * PropTypes
 */
Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


/*
 * Export
 */
export default Description;
