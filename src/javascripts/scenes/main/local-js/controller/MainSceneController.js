
class MainSceneController {
  constructor(scene) {
    this.scene = scene;
    const { _gameVars } = scene;
    this.layers = _gameVars.layers;
    this.stateMachines = this.layers.game.getObject('stateMachines');
    this.fighters = this.stateMachines.map(s => s.stateParams.fighter);
    this.floor = this.layers.game.getObject('floor');
    this.cameraController = scene._gameVars.cameraController;
    this.cameraController.UpdatePosition(this.fighters, this.scene);
    this.skipFrames = 60;
    this.gameEnded = false;
    this.audio = {
      thud: scene.sound.add('thud', {
        volume: 1.0,
      }),
      ding: scene.sound.add('ding', {
        volume: 1.0,
      })
    };
  }

  onUpdate(time, delta) {
    this.checkFighterFacing();
    this.checkFighterPositions();
    this.checkFighterHit(0, 1);
    this.checkFighterHit(1, 0);
    this.scene.physics.world.collide(this.fighters, this.floor);
    this.scene.physics.world.collide(this.fighters[0], this.fighters[1]);

    if(!this.gameEnded) {
      this.stateMachines.forEach(sm => sm.step());
    }
    this.cameraController.UpdatePosition(this.fighters, this.scene);
    if(this.skipFrames > 0) {
      this.skipFrames--;
    } else {
      this.cameraController.UpdateWorldBounds(this.scene);
    }
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
    if(this.stateMachines[other].state === 'hit' || this.fighters[other].isInvincible) return;
    const a1Hitbox = this.fighters[index]._classVars.attackOneHitbox;
    const a1bounds = a1Hitbox.getBounds();
    const otherBounds = this.fighters[other]._classVars.rect.getBounds();
    const a1Hit = a1Hitbox.visible && Phaser.Geom.Intersects.RectangleToRectangle(a1bounds, otherBounds) && this.stateMachines[other].state !== 'hit';

    if(a1Hit) {
      this.fighters[index].stopAudio('attack');
      this.fighters[index].playAudio('connect');
      this.stateMachines[other].transition('hit');
      const fighter = this.fighters[other];
      fighter.health -= this.fighters[index].damage;
      // fighter.health += 100;
      if(fighter.health <= 0) {
        this.endGame(index, other);
      }
      this.layers.ui.Shake();
      this.layers.ui.UpdateBar(this.stateMachines[other].key, fighter.health / fighter.config.health);
    }
  }

  endGame(winner, loser) {
    const { character, key } = this.fighters[winner].config;
    this.gameEnded = true;
    this.scene.time.delayedCall(2000, () => {
      this.fighters[winner].playAnim('win');
      this.fighters[winner].stopAudio('idle');
      this.fighters[loser].playAnim('lose');
      this.fighters[loser].stopAudio('idle');
      this.audio.ding.play();
    });
    this.scene.time.delayedCall(4000, () => {
      this.scene.game.scene.start('game-end', { winner: key, character: character });
    });
  }
}

module.exports = MainSceneController;
