const defaultConfig = require('./javascripts/config/game');
const CharacterSelectScene = require('./javascripts/scenes/character-select');
const MainScene = require('./javascripts/scenes/main');
const GameEndScene = require('./javascripts/scenes/game-end');
const IntroScene = require('./javascripts/scenes/intro');
const CreditScene = require('./javascripts/scenes/credits');

const config = {
  ...defaultConfig,
  scene: [ 
    CharacterSelectScene,
    IntroScene,
    MainScene,
    GameEndScene,
    CreditScene,
  ]
};

new Phaser.Game(config);
