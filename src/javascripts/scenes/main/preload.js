const preload = function() {
  console.log('preload');
  this.load.glsl('starfields', 'shaders/starfields.glsl.js');
  this.load.image('logo', 'images/logo.png');
};

module.exports = preload;
