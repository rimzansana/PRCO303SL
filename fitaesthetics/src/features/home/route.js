import {
  HomeMain,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'home-main',
      name: 'Home main',
      component: HomeMain,
      isIndex: true,
    },
  ],
};
