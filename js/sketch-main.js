// NOTE: sketch-pre.js and sketch-post.js do additional work to
// put paper objects in global space and connect this code
// to the canvas#sketch element

// Create a circle shaped path at { x: 80, y: 50 }
// with a radius of 35:
var path = new Path.Circle({
	center: [80, 50],
	radius: 35
});

// Select the path, so we can inspect its segments:
path.selected = true;

// Create a copy of the path and move it by 150 points:
var copy = path.clone();
copy.position.x += 150;

// Flatten the copied path, with a maximum error of 4 points:
copy.flatten(.25);

///////////// event handlers:

view.onFrame = function(event) {
  if(window.stats && window.stats.update) {
    window.stats.update();
  }
};
