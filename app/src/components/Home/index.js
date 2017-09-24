/*
 * Package Import
 */
import React from 'react';


/*
 * Local Import
 */

// Datas
import { home } from 'src/store/datas';

// Components
import Description from 'src/components/Description';
import Cv from './Cv';


/*
 * Component
 */
const Home = () => (
  <div id="home">
    <div id="home-container">
      <div className="home">
        {home.map(h => (
          <Description
            key={h.id}
            title={h.title}
            text={h.description}
          />
        ))}
        <Cv />
      </div>

      <div className="home">
        <img
          alt="Alexandre Bourdeaud'hui"
          className="home-photo"
          src="/images/Photo_Alexandre_Bourdeaudhui.jpg"
        />
      </div>
    </div>
  </div>
);


/*
 * Export
 */
export default Home;
