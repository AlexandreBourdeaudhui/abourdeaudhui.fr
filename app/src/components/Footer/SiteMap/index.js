/*
 * Package Import
 */
import React from 'react';
import { Link } from 'react-router-dom';


/*
 * Local Import
 */


/*
 * Component
 */
const SiteMap = () => (
  <div id="sitemap">
    <h2 id="sitemap-title">Plan du site</h2>
    <p id="sitemap-desc">Vous êtes perdu? Pas de soucis, suivez le guide !</p>

    <div id="sitemap-container">
      <Link className="sitemap-link" to="/">
        Accueil
      </Link>
      <Link className="sitemap-link" to="/competences">
        Compétences
      </Link>
      <Link className="sitemap-link" to="/portfolio">
        Mes réalisations
      </Link>
      <Link className="sitemap-link sitemap-link-sub" to="/project/1/site-personnel">
        Site personnel
      </Link>
      <Link className="sitemap-link sitemap-link-sub" to="/project/2/o-quiz">
        O'Quiz
      </Link>
      <Link className="sitemap-link sitemap-link-sub" to="/project/3/love-app">
        Love App
      </Link>
      <Link className="sitemap-link" to="/contact">
        Contact
      </Link>
      <Link className="sitemap-link" to="/mentions-legales">
        Mentions légales
      </Link>
      <Link className="sitemap-link" to="/sitemap">
        Plan du site
      </Link>
    </div>
  </div>
);


/*
 * Export
 */
export default SiteMap;
