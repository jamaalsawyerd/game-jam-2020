const State = require('../../../../../shared/state-machine/State');
const Utils = require('../../../../../lib/utils');
class IdleState extends State {
  playSound(scene, fighter) {
    if(this.stateMachine.state !== 'idle') {
      return;
    }
    const delay = Phaser.Math.Between(0, 3000);
    if(this.callback) {
      this.callback.destroy();
      this.callback = null;
    }
    this.callback = scene.time.delayedCall(delay, () => {
      const a = fighter.playAudio('idle', {
        loop: false,
        rate: Utils.getRandomFloat(0.49, 0.51),
      });
      a.once('complete', () => {
        this.playSound(scene, fighter);
      });
    });
  }

  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    const { config } = fighter;
    fighter.body.setAcceleration(0, 0);
    fighter.body.setMaxVelocity(config.maxVel.x, config.maxVel.y);
    fighter.playAnim('idle');
    this.playSound(scene, fighter);
  }

  exit(scene, stateParams) {
    const { fighter } = stateParams;
    fighter.stopAudio('idle');
    if(this.callback) {
      this.callback.destroy();
      this.callback = null;
    }
    fighter.getAudio('idle').removeAllListeners('complete');
  }

  execute(scene, stateParams) {
    const { controls } = stateParams;
    const { left, right, up, down, attack1 } = controls;
    const LRDown = left.isDown && right.isDown;
    const UDDown = up.isDown && down.isDown;
    if(Phaser.Input.Keyboard.JustDown(attack1)) {
      this.stateMachine.transition('attackOne');
    } else if((down.isDown || Phaser.Input.Keyboard.JustDown(up)) && !UDDown) {
      this.stateMachine.transition(down.isDown ? 'crouch' : 'jump');
    } else if((left.isDown || right.isDown) && !LRDown) {
      this.stateMachine.transition('move', { direction: left.isDown ? 'left' : 'right' });
    }
  }
}

module.exports = IdleState;