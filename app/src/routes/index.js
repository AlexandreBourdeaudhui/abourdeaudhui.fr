/*
 * Package Import
 */


/*
 * Local Import
 */
// Components
import Home from 'src/components/Home';
import Competences from 'src/components/Competences';
import Contact from 'src/components/Contact';
import MentionsLegales from 'src/components/Footer/MentionsLegales';
import SiteMap from 'src/components/Footer/SiteMap';
import NotFound from 'src/components/NotFound';

// Containers
import Portfolio from 'src/containers/Portfolio';
import Project from 'src/containers/Project';


/*
 * Code
 */
const routes = [
  {
    path: '/',
    label: 'Accueil',
    component: Home,
  },
  {
    path: '/competences',
    label: 'Compétences',
    component: Competences,
  },
  {
    path: '/portfolio',
    label: 'Mes réalisations',
    component: Portfolio,
  },
  {
    path: '/project/:id/:path',
    component: Project,
  },
  {
    path: '/contact',
    label: 'Contact',
    component: Contact,
  },
  {
    path: '/mentions-legales',
    component: MentionsLegales,
  },
  {
    path: '/sitemap',
    component: SiteMap,
  },
  {
    path: '',
    component: NotFound,
  },
];


/*
 * Export
 */
export default routes;
