const defaultConfig = require('./javascripts/config/game');
const MainScene = require('./javascripts/scenes/main');
const GameEndScene = require('./javascripts/scenes/game-end');
const IntroScene = require('./javascripts/scenes/intro');
const CreditScene = require('./javascripts/scenes/credits');

const config = {
  ...defaultConfig,
  scene: [
    //IntroScene,
    CreditScene,
    MainScene,
    GameEndScene,
  ]
};

new Phaser.Game(config);
