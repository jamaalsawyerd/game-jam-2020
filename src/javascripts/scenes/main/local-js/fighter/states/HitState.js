const State = require('../../../../../shared/state-machine/State');
class HitState extends State {
  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    const { config, _classVars } = fighter;
    const facingLeft = fighter.facing === 'left';
    const { jumpVel, jumpMaxVel } = fighter.config;
    fighter.body.setAcceleration(0, 0);
    fighter.body.setVelocityY(-jumpVel.y);

    const velX = facingLeft ? jumpVel.x * 2 : -jumpVel.x * 2;

    fighter.body.setVelocityX(velX);
    fighter.body.setVelocityY(-jumpVel.y);
    fighter.body.setMaxVelocity(jumpMaxVel.x * 2, jumpMaxVel.y);

    fighter.playAnim('hit');
    fighter.playAudio('hit');
    const { attackOneHitbox } = fighter._classVars;
    attackOneHitbox.setVisible(false);
    fighter.setDepth(5);
    fighter.emitParticles(1400);
    scene.time.delayedCall(500, () => {
      fighter.setInvincible();
      this.stateMachine.transition('idle');
      fighter.setDepth(1);
    });
  }

  execute(scene, stateParams) {

  }
}

module.exports = HitState;