// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  SearchMain,
} from './';

export default {
  path: 'search',
  name: 'Search',
  childRoutes: [
    { path: 'search-main', name: 'Search main', component: SearchMain, isIndex: true },
  ],
};
