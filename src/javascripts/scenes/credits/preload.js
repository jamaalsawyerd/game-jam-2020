const preload = function() {
  console.log('preload');

  this.load.image('credits', 'images/credits.png');
};

module.exports = preload;
