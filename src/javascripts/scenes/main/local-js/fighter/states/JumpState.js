const State = require('../../../../../shared/state-machine/State');
class JumpState extends State {
  enter(scene, stateParams, enterParams) {
    const { controls, fighter } = stateParams;
    const { config } = fighter;
    const { left, right } = controls;
    const bothDown = left.isDown && right.isDown;
    const noneDown = !left.isDown && !right.isDown;
    const direction = bothDown || noneDown ? undefined : `${left.isDown ? 'left' : 'right'}`;

    const { jumpVel } = fighter.config;

    fighter.body.setVelocityY(-jumpVel.y);

    if(direction) {
      const velX = direction === 'left' ? -jumpVel.x : jumpVel.x;
      fighter.body.setVelocityX(velX);
      fighter.body.setMaxVelocity(config.jumpMaxVel.x, config.jumpMaxVel.y);
    }
    fighter.playAnim('jump');
  }

  execute(scene, stateParams) {
    const { floor, fighter, controls } = stateParams;
    const bothDown = controls.left.isDown && controls.right.isDown;
    const movingLeft = controls.left.isDown && !bothDown;
    const movingRight = controls.right.isDown && !bothDown;

    const jumpAcclReduce = 10;
    if(movingLeft) {
      fighter.body.setAccelerationX(-fighter.config.acceleration.x / jumpAcclReduce);
    } else if(movingRight) {
      fighter.body.setAccelerationX(fighter.config.acceleration.x / jumpAcclReduce);
    } else {
      fighter.body.setAccelerationX(0);
    }

    if(fighter.body.touching.down && fighter.y + fighter.height/2 > floor.y - 25) {
      this.stateMachine.transition('idle');
    } else if(fighter.body.touching.down) {
      const { jumpVel } = fighter.config;
      fighter.body.setVelocityY(-jumpVel.y * 0.8);
    }
  }

}

module.exports = JumpState;