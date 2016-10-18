window.body = document.getElementsByTagName('body')[0];

//Pollutes the global space so we can write code more like Paperscript:
paper.install(window);

//Sets up our canvas (wdone automatically if we used Paperscript)
paper.setup('sketch');

///////////// setup sketch:

project.currentStyle = {
  strokeColor: '#000000',
  fillColor: '#ff0000',
  strokeWidth: 3
};

var firstPath = new Path.Circle({
  center: [100, 100],
  radius: 50
});

project.currentStyle.strokeWidth = 8;
project.currentStyle.fillColor = 'green';

var secondPath = new Path.Circle({
  center: [250, 100],
  radius: 50
});

///////////// event handlers:

view.onFrame = function(event) {
  if(window.stats && window.stats.update) {
    window.stats.update();
  }
};

////////////

//Draws onto our canvas (done automatically if we used Paperscript)
view.draw();

// for displaying monitor stats i.e. framerate

function initializeStatsGUI() {
  var stats = new Stats();
  stats.domElement.style.bottom = '0px';
  stats.domElement.style.right = '0px'
  stats.domElement.style.left = ''
  stats.domElement.style.top = '';
  window.body.appendChild(stats.dom);

  return stats;
}

window.stats = initializeStatsGUI();
