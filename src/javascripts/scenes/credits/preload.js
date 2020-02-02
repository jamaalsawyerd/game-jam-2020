const preload = function() {
  console.log('preload');

  this.load.image('credits', 'images/credits.png');
  this.load.image('creditsBack', 'images/credits_background.png');
  this.load.image('leftchars', 'images/character_1.png');
  this.load.image('rightchars', 'images/character_2.png');
  this.load.image('ggjLogo', 'images/ggj.png');
  this.load.image('restart_btn', 'images/btn_restart.png');
};

module.exports = preload;
