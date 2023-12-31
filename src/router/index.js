import { Home, About, Services, Team, Contact} from '../pages/index';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    title: 'About Us',
    component: About,
  },
  {
    path: '/services',
    exact: true,
    title: 'Our Services',
    component: Services, //replace with Services component when available
  },
  {
    path: '/team',
    exact: true,
    title: 'Join Our Team',
    component: Team, //replace with Team component when available
  },
  {
    path: '/contact',
    exact: true,
    title: 'Contact Us',
    component: Contact, //replace with Contact component when available
  },
 
 
  
];

export { routes };
