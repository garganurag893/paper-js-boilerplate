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
