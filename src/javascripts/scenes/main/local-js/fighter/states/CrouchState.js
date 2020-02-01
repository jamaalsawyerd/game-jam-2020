const State = require('../../../../../shared/state-machine/State');
class CrouchState extends State {
  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    const { config } = fighter;
    fighter.body.setAcceleration(0, 0);
    fighter.body.setMaxVelocity(config.maxVel.x, config.maxVel.y);
    fighter.playAnim('crouch');
  }

  execute(scene, stateParams) {
    const { controls } = stateParams;
    const { down } = controls;
    if(!down.isDown) {
      this.stateMachine.transition('idle');
    }
  }
}

module.exports = CrouchState;