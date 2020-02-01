const State = require('../../../../../shared/state-machine/State');
class IdleState extends State {
  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    const { config } = fighter;
    fighter.body.setAcceleration(0, 0);
    fighter.body.setMaxVelocity(config.maxVel.x, config.maxVel.y);
  }

  execute(scene, stateParams) {
    const { controls } = stateParams;
    const { left, right, up } = controls;
    const bothDown = left.isDown && right.isDown;
    if(up.isDown) {
      this.stateMachine.transition('jump');
    } else if((left.isDown || right.isDown) && !bothDown) {
      this.stateMachine.transition('move', { direction: left.isDown ? 'left' : 'right' });
    }
  }
}

module.exports = IdleState;