/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
// Composant
import Social from './Social';
import Links from './Links';


/*
 * Component
 */
const Footer = () => {
  const getYear = new Date().getFullYear();


  /*
   * View
   */
  return (
    <footer id="footer">
      <div id="footer-container">
        <Links />
        <Social />
      </div>

      <div id="footer-copyright">
        <span className="footer-copyright-text">
          Copyright © {getYear} By Alexandre Bourdeaud'hui
        </span>
        <span className="footer-copyright-text">
          All rights reserved
        </span>
      </div>
    </footer>
  );
};

/*
 * Export
 */
export default Footer;
