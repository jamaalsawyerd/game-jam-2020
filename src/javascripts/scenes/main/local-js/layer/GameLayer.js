const Layer = require('../../../../shared/layer/generic');
const Fighter = require('../fighter/Fighter');
const FighterStateMachine = require('../fighter/FighterStateMachine');
const FighterConfig = require('../../../../config/fighter');

class GameLayer extends Layer {
  constructor(group, scene) {
    super(group, scene);
    //get camera vars
    const { centerX, centerY, width, height } = scene.cameras.main;
    // create the floor
    const floor = scene.add.rectangle(centerX, height * 0.75, width, height * 0.25, 0xb5651d, 1).setOrigin(0.5, 0);
    scene.physics.add.existing(floor);
    floor.body.immovable = true;
    floor.body.allowGravity = false;
    this.group.add(floor);
    this.addObject('floor', floor);

    const offsetX = 200;
    const groundY = centerY + 140;

    const fighter1 = new Fighter(scene, centerX - offsetX, groundY, { defaultColor: 0xadd8e6 });
    const { controlConfig, defaultFighterVars } = FighterConfig;

    const f1Vars = { ...defaultFighterVars };
    const f1Controls = this.setFighterControls(scene, controlConfig.fighter1);

    const fighter2 = new Fighter(scene, centerX + 200, groundY, { defaultColor: 0xfed8b1 });
    const f2Vars = { ...defaultFighterVars, direction: 'left' };
    const f2Controls = this.setFighterControls(scene, controlConfig.fighter2);

    // The state machine managing the hero
    const stateMachines = [
      new FighterStateMachine({
        key: 'fighter1',
        fighter: fighter1,
        controls: f1Controls,
        fVars: { ...f1Vars },
      }, scene),
      new FighterStateMachine({
        key: 'fighter2',
        fighter: fighter2,
        controls: f2Controls,
        fVars: f2Vars,
      }, scene),
    ];



    this.addObject('stateMachines', stateMachines);
  }

  setFighterControls(scene, config) {
    const { keyboard } = scene.input;
    const input = {};
    for(const k in config) {
      input[k] = keyboard.addKey(config[k]);
    }
    return input;
  }

}
module.exports = GameLayer;