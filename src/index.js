const defaultConfig = require('./javascripts/config/game');
const MainScene = require('./javascripts/scenes/main');
const GameEndScene = require('./javascripts/scenes/game-end');

const config = {
  ...defaultConfig,
  scene: [
    MainScene,
    GameEndScene,
  ]
};

new Phaser.Game(config);
