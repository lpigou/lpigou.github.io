$(document).ready(function() {
  $('.slider').sss({
    slideShow : true, // Set to false to prevent SSS from automatically animating.
    startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
    transition : 500, // Length (in milliseconds) of the fade transition.
    speed : 5000, // Slideshow speed in milliseconds.
    showNav : true // Set to false to hide navigation arrows.
  });



});


(function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));