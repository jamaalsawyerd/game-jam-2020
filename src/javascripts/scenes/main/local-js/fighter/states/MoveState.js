const State = require('../../../../../shared/state-machine/State');
class MoveState extends State {
  constructor() {
    super();
    this.direction = undefined; //left or right
  }
  enter(scene, stateParams, enterParams) {
    this.direction = enterParams.direction;
  }

  execute(scene, params) {
    const { controls, fighter, fVars } = params;
    const bothDown = controls.left.isDown && controls.right.isDown;
    const movingLeft = this.direction === 'left' && controls.left.isDown && !bothDown;
    const movingRight = this.direction === 'right' && controls.right.isDown && !bothDown;
    if(movingLeft) {
      fighter.body.setAccelerationX(-fighter.config.acceleration.x);
    } else if(movingRight) {
      fighter.body.setAccelerationX(fighter.config.acceleration.x);
    } else {
      this.stateMachine.transition('idle');
    }
  }
}

module.exports = MoveState;