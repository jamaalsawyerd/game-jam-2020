const preload = function() {
  console.log('preload');

  this.load.image('controlBackground', 'images/controls.png');
};

module.exports = preload;
