/*
 * Package Import
 */
import React from 'react';


/*
 * Local Import
 */
import { ReseauSociaux } from 'src/store/datas';


/*
 * Components
 */
const Social = () => (
  <p id="social">
    <span>Vous pouvez également me suivre sur les réseaux sociaux</span>

    {ReseauSociaux.map(link => (
      <span className="social-items" key={link.label}>
        <a className="social-items-link" href={link.url}>
          {link.label}
        </a>
      </span>
    ))}
  </p>
);


/*
 * Export
 */
export default Social;
