
class MainSceneController {
  constructor(scene) {
    this.scene = scene;
    const { _gameVars } = scene;
    this.layers = _gameVars.layers;
    this.stateMachines = this.layers.game.getObject('stateMachines');
    this.fighters = this.stateMachines.map(s => s.stateParams.fighter);
    this.floor = this.layers.game.getObject('floor');
  }

  onUpdate(time, delta) {
    this.scene.physics.world.collide(this.fighters, this.floor);
    this.stateMachines.forEach(sm => sm.step());
  }
}

module.exports = MainSceneController;
