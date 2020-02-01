const preload = function() {
  console.log('preload');
  this.load.glsl('starfields', 'shaders/starfields.glsl.js');
  this.load.image('logo', 'images/logo.png');
  this.load.image('bar', 'images/fillbar.png');
  this.load.image('ui_back', 'images/topui.png');
};

module.exports = preload;
