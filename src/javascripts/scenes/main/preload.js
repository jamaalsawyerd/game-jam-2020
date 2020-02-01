const preload = function() {
  console.log('preload');
  this.load.glsl('starfields', 'shaders/starfields.glsl.js');
  this.load.image('logo', 'images/logo.png');
  this.load.image('mainBackground', 'images/main_back.png');
};

module.exports = preload;
