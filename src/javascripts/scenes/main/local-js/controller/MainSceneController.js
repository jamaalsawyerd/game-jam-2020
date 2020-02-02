
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
    this.cameraController.UpdatePosition(this.fighters, this.scene);
    this.cameraController.UpdateWorldBounds(this.scene);
    this.ui.onUpdate(this.scene);
  }

  onUpdate(time, delta) {
    this.checkFighterFacing();
    this.checkFighterPositions();
    this.scene.physics.world.collide(this.fighters, this.floor);
    this.stateMachines.forEach(sm => sm.step());
    this.cameraController.UpdatePosition(this.fighters, this.scene)
    this.cameraController.UpdateWorldBounds(this.scene);
    //this.ui.onUpdate(this.scene);

    if (Phaser.Input.Keyboard.JustDown(spacebar)) {
      console.log("SAPCE")
      this.takeDamage("fighter1", this.fighters[0], this.fighters[0].damage);
    }
    if (Phaser.Input.Keyboard.JustDown(tab)){
      this.takeDamage("fighter2", this.fighters[1], this.fighters[1].damage);
    }
  }

  checkFighterPositions() {
    this.fighters.forEach((f) => {
      if(f.y + f.height / 2 > this.floor.y) {
        f.y = this.floor.y - f.height / 2;
      }
    });
  }
  checkFighterFacing() {
    const facing = this.fighters[0].facing;
    const side = this.fighters[0].x > this.fighters[1].x ? 'left' : 'right';
    if(facing !== side) {
      this.fighters[0].facing = this.fighters[1].facing;
      this.fighters[1].facing = facing;
      this.fighters[0].scaleX *= -1;
      this.fighters[1].scaleX *= -1;
    }
  }
  takeDamage(fighterName, fighter, amount){
    
    fighter.health -= amount;
    console.log(fighter.health/fighter.config.health  );
    if (fighterName == "fighter1"){
      this.ui.bars.UpdateLeftHealth(fighter.health/fighter.config.health);
    } else {
      this.ui.bars.UpdateRightHealth(fighter.health/fighter.config.health);
    }
  }
}

module.exports = MainSceneController;
