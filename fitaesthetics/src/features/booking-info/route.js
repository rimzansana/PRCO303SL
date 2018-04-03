// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  BookingMain,
} from './';

export default {
  path: 'booking-info',
  name: 'Booking info',
  childRoutes: [
    { path: 'booking-main', name: 'Booking main', component: BookingMain, isIndex: true },
  ],
};
