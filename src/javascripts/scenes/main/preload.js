const preload = function() {
  console.log('preload');
  this.load.glsl('starfields', 'shaders/starfields.glsl.js');
  this.load.image('logo', 'images/logo.png');
  this.load.image('mainBackground', 'images/main_back.png');
  this.load.atlas('doctors', 'images/doctors.png', 'images/doctors.json');
  this.load.image('ui_back', 'images/topui.png');
  this.load.image('bar', 'images/fillbar.png');
};

module.exports = preload;
