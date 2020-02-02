const State = require('../../../../../shared/state-machine/State');
class AttackOneState extends State {
  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    fighter.body.setVelocity(0, 0);
    fighter.body.setAcceleration(0, 0);
    fighter.playAnim('attack1');
    const { attackOneHitbox} = fighter._classVars;
    attackOneHitbox.body.enabled = true;
    attackOneHitbox.setVisible(true);
    fighter.setDepth(5);

    scene.time.delayedCall(250, () => {
      this.stateMachine.transition('idle');
      attackOneHitbox.setVisible(false);
      fighter.setDepth(1);
      fighter._classVars.attackOneHitbox.body.enabled = false;
    });
  }

  execute(scene, params) {

  }
}

module.exports = AttackOneState;