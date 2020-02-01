const preload = function() {
  console.log('preload');
  this.load.glsl('starfields', 'shaders/starfields.glsl.js');
  this.load.image('logo', 'images/logo.png');
  this.load.image('bar', 'images/fillbar.png');
  this.load.image('ui_back', 'images/topui.png');
  this.load.image('main_background', 'images/background3.png');
};

module.exports = preload;
