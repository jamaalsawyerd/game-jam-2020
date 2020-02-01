
const PhaserGroupManager = require('../../shared/manager/phaser-group');
const GameLayer = require('./local-js/layer/GameLayer');
const UILayer = require('./local-js/layer/UILayer');
const MainSceneController = require('./local-js/controller/MainSceneController');
const create = function() {
  console.log('create');

  this.cameras.main.setBackgroundColor('#ffb6c1');
  this._gameVars = {};
  const phaserGroupManager = new PhaserGroupManager(this);
  this._gameVars.phaserGroupManager = phaserGroupManager;
  this._gameVars.layers = {
    game: new GameLayer(phaserGroupManager.add('game'), this),
    ui: new UILayer(phaserGroupManager.add('ui'), this),
  };
  this._gameVars.controller = new MainSceneController(this);
};


module.exports = create;