const State = require('../../../../../shared/state-machine/State');
class MoveState extends State {
  constructor() {
    super();
    this.direction = undefined; //left or right
  }
  enter(scene, stateParams, enterParams) {
    this.direction = enterParams.direction;
  }

  execute(scene, stateParams) {
    const { controls, fighter } = stateParams;

    const { left, right, up, down, attack1 } = controls;
    const LRDown = left.isDown && right.isDown;
    const UDDown = up.isDown && down.isDown;

    const movingLeft = this.direction === 'left' && controls.left.isDown && !LRDown;
    const movingRight = this.direction === 'right' && controls.right.isDown && !UDDown;
    const currentAnim = fighter.getCurrentAnim();
    
    if(Phaser.Input.Keyboard.JustDown(attack1)) {
      this.stateMachine.transition('attackOne');
    } else if((down.isDown || Phaser.Input.Keyboard.JustDown(up)) && !UDDown ) {
      this.stateMachine.transition(down.isDown ? 'crouch' : 'jump');
    } else if(movingLeft) {
      const noAnim = (currentAnim.key.includes('back') && fighter.facing === 'right') || (currentAnim.key.includes('forward') && fighter.facing === 'left');
      if(!noAnim) {
        fighter.playAnim(`move_${fighter.facing === 'right' ? 'back' : 'forward'}`);
      }
      fighter.body.setAccelerationX(-fighter.config.acceleration.x);
    } else if(movingRight) {
      const noAnim = (currentAnim.key.includes('back') && fighter.facing === 'left') || (currentAnim.key.includes('forward') && fighter.facing === 'right');
      if(!noAnim) {
        fighter.playAnim(`move_${fighter.facing === 'left' ? 'back' : 'forward'}`);
      }
      fighter.body.setAccelerationX(fighter.config.acceleration.x);
    } else {
      this.stateMachine.transition('idle');
    }
  }
}

module.exports = MoveState;