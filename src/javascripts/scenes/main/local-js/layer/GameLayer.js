const Layer = require('../../../../shared/layer/generic');
const FighterStateMachine = require('../fighter/FighterStateMachine');

class GameLayer extends Layer {
  constructor(group, scene) {
    super(group, scene);
    //get camera vars
    const { centerX, width, height } = scene.cameras.main;
    // create the floor
    const floor = scene.add.rectangle(centerX, height * 0.75, width, height * 0.25, 0xb5651d, 1).setOrigin(0.5, 0);

    scene.physics.add.existing(floor);
    floor.body.immovable = true;
    floor.body.allowGravity = false;
    this.group.add(floor);
    this.addObject('floor', floor);

    const fighter = scene.add.rectangle(centerX, height * 0.75, 50, 100, 0xffffff, 1).setOrigin(0.5, 1);
    scene.physics.add.existing(fighter, false);
    this.group.add(fighter);
    this.addObject('fighter', fighter);

    // The state machine managing the hero
    const stateMachines = [
      new FighterStateMachine(fighter, scene)
    ];

    this.addObject('stateMachines', stateMachines);
  }
}
module.exports = GameLayer;