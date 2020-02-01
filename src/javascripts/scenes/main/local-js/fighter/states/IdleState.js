const State = require('../../../../../shared/state-machine/State');
class IdleState extends State {
  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    fighter.body.setAcceleration(0, 0);
  }

  execute(scene, stateParams) {
    const { controls } = stateParams;
    const { left, right } = controls;
    const bothDown = left.isDown && right.isDown;
    if( (left.isDown || right.isDown) && !bothDown) {
      this.stateMachine.transition('move', { direction: left.isDown ? 'left' : 'right' });
    }
  }
}

module.exports = IdleState;