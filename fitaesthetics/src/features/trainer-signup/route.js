// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  TrainerMain,
} from './';

export default {
  path: 'trainer-signup',
  name: 'Trainer signup',
  childRoutes: [
    { path: 'trainer-main', name: 'Trainer main', component: TrainerMain, isIndex: true },
  ],
};
