const State = require('../../../../../shared/state-machine/State');
class IdleState extends State {
  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    const { config } = fighter;
    fighter.body.setAcceleration(0, 0);
    fighter.body.setMaxVelocity(config.maxVel.x, config.maxVel.y);
    fighter.playAnim('idle');
  }

  execute(scene, stateParams) {
    const { controls } = stateParams;
    const { left, right, up, down, attack1 } = controls;
    const LRDown = left.isDown && right.isDown;
    const UDDown = up.isDown && down.isDown;
    if(Phaser.Input.Keyboard.JustDown(attack1)) {
      this.stateMachine.transition('attackOne');
    } else if( (down.isDown || Phaser.Input.Keyboard.JustDown(up)) && !UDDown) {
      this.stateMachine.transition(down.isDown ? 'crouch' : 'jump');
    } else if((left.isDown || right.isDown) && !LRDown) {
      this.stateMachine.transition('move', { direction: left.isDown ? 'left' : 'right' });
    }
  }
}

module.exports = IdleState;