const preload = function() {
  console.log('preload');
  this.load.setPath('/images');
  this.load.image('logo', 'logo.png');
};

module.exports = preload;
