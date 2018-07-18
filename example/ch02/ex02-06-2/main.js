$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  // この辺で描画

  let c = Shape.Circle(200, 200, 50);
  c.fillColor = 'lightgreen';

  paper.view.draw();
});