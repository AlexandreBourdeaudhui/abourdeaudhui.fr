/*
 * Package Import
 */
import React from 'react';


/*
 * Local Import
 */


/*
 * Code
 */
const links = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/qlex_',
    img: '/images/twitter.svg',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexandrebourdeaudhui/',
    img: '/images/linkedin.svg',
  },
  {
    label: 'Github',
    url: 'https://github.com/alexandrebourdeaudhui',
    img: '/images/github.svg',
  },
];


/*
 * Component
 */
const Social = () => (
  <div id="footer-container-social">
    {links.map(link => (
      <span className="footer-social-items" key={link.label}>
        <a href={link.url}>
          <img
            alt={`Lien ${link.label}`}
            className="footer-social-items-image"
            src={link.img}
          />
        </a>
      </span>
    ))}
  </div>
);


/*
 * Export
 */
export default Social;
