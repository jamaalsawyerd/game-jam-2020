
const PhaserGroupManager = require('../../shared/manager/phaser-group');
const GameLayer = require('./local-js/layer/GameLayer');
const UILayer = require('./local-js/layer/UILayer');
const MainSceneController = require('./local-js/controller/MainSceneController');
const CameraController = require('./local-js/controller/CameraController');
const create = function(data) {
  if(!data.player1) {
    data = {
      player1: 'blood',
      player2: 'foot',
    };
  }
  console.log('create');
  this.game.scene.stop('intro');
  this.cameras.main.setBackgroundColor('#000000');
  this._gameVars = {};
  const phaserGroupManager = new PhaserGroupManager(this);
  this._gameVars.phaserGroupManager = phaserGroupManager;
  this._gameVars.layers = {
    game: new GameLayer(phaserGroupManager.add('game'), this, data),
    ui: new UILayer(phaserGroupManager.add('ui'), this, data),
  };
  this._gameVars.cameraController = new CameraController(this);
  this._gameVars.controller = new MainSceneController(this);
  this.controller = this._gameVars.controller;
};


module.exports = create;