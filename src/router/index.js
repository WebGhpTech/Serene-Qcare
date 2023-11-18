import { Home, About } from '../pages';

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
    component: Home, //replace with Services component when available
  },
  {
    path: '/team',
    exact: true,
    title: 'Join Our Team',
    component: Home, //replace with Team component when available
  },
  {
    path: '/contact',
    exact: true,
    title: 'Contact Us',
    component: Home, //replace with Contact component when available
  },
];

export { routes };
