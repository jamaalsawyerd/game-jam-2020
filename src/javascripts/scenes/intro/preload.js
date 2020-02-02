const preload = function() {
  console.log('preload');
  this.load.image('controlBackground', 'images/controls.png');
  this.load.image('begin', 'images/btn_begin.png');
};

module.exports = preload;
