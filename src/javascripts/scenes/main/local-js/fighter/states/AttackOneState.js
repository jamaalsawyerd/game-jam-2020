const State = require('../../../../../shared/state-machine/State');
class AttackOneState extends State {
  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    fighter.body.setVelocity(0, 0);
    fighter.body.setAcceleration(0, 0);
    fighter.playAnim('attack1');
    scene.time.delayedCall(250, () => {
      this.stateMachine.transition('idle');
    });
  }

  execute(scene, params) {

  }
}

module.exports = AttackOneState;