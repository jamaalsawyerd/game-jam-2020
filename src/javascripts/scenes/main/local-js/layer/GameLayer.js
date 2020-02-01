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
    const background = scene.add.image(centerX, centerY, 'mainBackground');
    this.group.add(background);

    const floor = scene.add.rectangle(centerX, height - 90, width, 1000, 0xb5651d, 1).setOrigin(0.5, 0);
    scene.physics.add.existing(floor);
    floor.body.immovable = true;
    floor.body.allowGravity = false;
    floor.body.setMass(100000);
    this.group.add(floor);
    this.addObject('floor', floor);

    const offsetX = 200;
    const groundY = floor.y - 75 ;

    const { controlConfig, defaultFighterVars, defaultFighterConfig } = FighterConfig;
    const fighter1 = new Fighter(scene, centerX - offsetX, groundY, { config: { ...defaultFighterConfig }, defaultColor: 0xadd8e6 });


    const f1Vars = { ...defaultFighterVars };
    const f1Controls = this.setFighterControls(scene, controlConfig.fighter1);

    const fighter2 = new Fighter(scene, centerX + 200, groundY, { config: { ...defaultFighterConfig }, defaultColor: 'black' });
    const f2Vars = { ...defaultFighterVars, direction: 'left' };
    const f2Controls = this.setFighterControls(scene, controlConfig.fighter2);

    // The state machine managing the hero
    const stateMachines = [
      new FighterStateMachine({
        key: 'fighter1',
        floor,
        fighter: fighter1,
        controls: f1Controls,
        fVars: { ...f1Vars },
      }, scene),
      new FighterStateMachine({
        key: 'fighter2',
        floor,
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