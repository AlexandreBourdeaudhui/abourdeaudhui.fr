/*
 * Package Import
 */
import React from 'react';
import { Link } from 'react-router-dom';


/*
 * Local Import
 */


/*
 * Code
 */
const links = [
  {
    label: 'Page de Contact',
    slug: '/contact',
  },
  {
    label: 'Mentions légales',
    slug: '/mentions-legales',
  },
  {
    label: 'Plan du site',
    slug: '/sitemap',
  },
];


/*
 * Component
 */
const Links = () => (
  <div id="footer-container-links">
    {links.map(link => (
      <span className="footer-links-item" key={link.slug}>
        <Link to={link.slug}>
          {link.label}
        </Link>
      </span>
    ))}
  </div>
);


/*
 * Export
 */
export default Links;
