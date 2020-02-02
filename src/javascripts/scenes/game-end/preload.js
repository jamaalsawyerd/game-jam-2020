const preload = function() {
  console.log('preload');

  this.load.image('gameOverBackground', 'images/gameOverBack.png');
  this.load.image('portraitBack', 'images/portraitBack.png');
  this.load.image('blood', 'images/select_blood.png');
  this.load.image('foot', 'images/select_foot.png');
};

module.exports = preload;
