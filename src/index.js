const defaultConfig = require('./javascripts/config/game');
const MainScene = require('./javascripts/scenes/main');

const config = {
  ...defaultConfig,
  scene: [
    MainScene,
  ]
};

new Phaser.Game(config);
