
class MainSceneController {
  constructor(scene) {
    this.scene = scene;
    const { _gameVars } = scene;
    this.layers = _gameVars.layers;
    this.stateMachines = this.layers.game.getObject('stateMachines');
    this.fighters = this.stateMachines.map(s => s.stateParams.fighter);
    this.floor = this.layers.game.getObject('floor');
    this.ui = this.layers.ui;
    this.cameraController = scene._gameVars.cameraController;
    this.cameraController.UpdatePosition(this.fighters);
    this.cameraController.UpdateWorldBounds(this.scene);

  }

  onUpdate(time, delta) {
    this.scene.physics.world.collide(this.fighters, [this.floor, ...this.fighters]);
    this.stateMachines.forEach(sm => sm.step());
    this.cameraController.UpdatePosition(this.fighters)
    this.cameraController.UpdateWorldBounds(this.scene);
    this.ui.onUpdate(this.scene);
  }
}

module.exports = MainSceneController;
