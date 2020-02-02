const defaultConfig = require('./javascripts/config/game');
const CharacterSelectScene = require('./javascripts/scenes/character-select');
const MainScene = require('./javascripts/scenes/main');
const GameEndScene = require('./javascripts/scenes/game-end');

const config = {
  ...defaultConfig,
  scene: [
    CharacterSelectScene,
    MainScene,
    GameEndScene,
  ]
};

new Phaser.Game(config);
