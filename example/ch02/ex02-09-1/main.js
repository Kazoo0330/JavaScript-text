$(document).ready(function() {
  'use strict';
  console.log('loading main.js.......');
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  let tool = new Tool();

  let c = Shape.Circle(200, 200, 80);  //ciecle
  c.fillColor = 'black';

  let text = new PointText(200, 200);  //新しいテキストを中央領域に
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'Sup?';

  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'lightgreen';
  };
});
