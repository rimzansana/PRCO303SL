// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  BioMain,
} from './';

export default {
  path: 'trainer-bio',
  name: 'Trainer bio',
  childRoutes: [
    { path: 'bio-main', name: 'Bio main', component: BioMain, isIndex: true },
  ],
};
