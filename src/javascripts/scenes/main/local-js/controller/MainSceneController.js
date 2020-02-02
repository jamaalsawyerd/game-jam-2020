
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
    this.checkFighterFacing();
    this.checkFighterPositions();
    this.checkFighterHit(0, 1);
    this.checkFighterHit(1, 0);
    this.scene.physics.world.collide(this.fighters, this.floor);
    this.scene.physics.world.collide(this.fighters[0], this.fighters[1]);
    this.stateMachines.forEach(sm => sm.step());
  }

  checkFighterPositions() {
    this.fighters.forEach((f) => {
      if(f.y + f.height / 2 > this.floor.y) {
        f.y = this.floor.y - f.height / 2;
        f.body.setVelocityY(0);
      }
    });
  }
  checkFighterFacing() {
    const facing = this.fighters[0].facing;
    const side = this.fighters[0].x > this.fighters[1].x ? 'left' : 'right';
    if(facing !== side) {
      this.fighters[0].facing = this.fighters[1].facing;
      this.fighters[1].facing = facing;
      this.fighters[0]._classVars.sprite.scaleX *= -1;
      this.fighters[1]._classVars.sprite.scaleX *= -1;
      this.fighters[0]._classVars.attackOneHitbox.setOrigin(this.fighters[0]._classVars.attackOneHitbox.originX === 0 ? 1 : 0, 0.5);
      this.fighters[1]._classVars.attackOneHitbox.setOrigin(this.fighters[1]._classVars.attackOneHitbox.originX === 0 ? 1 : 0, 0.5);
    }
  }
  checkFighterHit(index, other) {

    
    if(this.stateMachines[other].state === 'hit') return;
    const a1Hitbox = this.fighters[index]._classVars.attackOneHitbox;
    const a1bounds = a1Hitbox.getBounds();
    const otherBounds = this.fighters[other]._classVars.rect.getBounds();
    const a1Hit = a1Hitbox.visible && Phaser.Geom.Intersects.RectangleToRectangle(a1bounds, otherBounds) && this.stateMachines[other].state !== 'hit';

    if(a1Hit) {
      this.stateMachines[other].transition('hit');
    }
  }
}

module.exports = MainSceneController;
