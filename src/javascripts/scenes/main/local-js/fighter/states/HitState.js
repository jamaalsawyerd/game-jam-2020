const State = require('../../../../../shared/state-machine/State');
class HitState extends State {
  enter(scene, stateParams, enterParams) {
    const { fighter } = stateParams;
    const { config } = fighter;
    const facingLeft = fighter.facing === 'left';
    const { jumpVel, jumpMaxVel } = fighter.config;
    fighter.body.setAcceleration(0, 0);
    fighter.body.setVelocityY(-jumpVel.y);

    const velX = facingLeft ? jumpVel.x : -jumpVel.x;
    
    fighter.body.setVelocityX(velX);
    fighter.body.setVelocityY(-jumpVel.y);
    fighter.body.setMaxVelocity(jumpMaxVel.x, jumpMaxVel.y);
 
    fighter.playAnim('hit');
    const { attackOneHitbox } = fighter._classVars;
    attackOneHitbox.setVisible(false);
    fighter.setDepth(5);
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