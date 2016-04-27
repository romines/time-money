'use strict';

import BlackTriangle from "./BlackTriangle";
require('./style.scss');

const triangle = new BlackTriangle('#triangle');

window.setInterval(
  () => {
    triangle.rotate(1);
    triangle.render();
  },
  20
);
