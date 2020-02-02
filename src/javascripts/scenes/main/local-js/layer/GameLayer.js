const Layer = require('../../../../shared/layer/generic');
const Fighter = require('../fighter/Fighter');
const FighterStateMachine = require('../fighter/FighterStateMachine');
const FighterConfig = require('../../../../config/fighter');

class GameLayer extends Layer {
  constructor(group, scene) {
    super(group, scene);
    this;
    //get camera vars
    const { centerX, centerY, width, height } = scene.cameras.main;
    // create the floor
    const background = scene.add.image(centerX, centerY, 'mainBackground');
    this.group.add(background);

    const floorHeight = 60;
    const floorWidth = 2000;
    const floor = scene.add.rectangle(centerX, height - floorHeight, floorWidth, floorHeight, 0xb5651d, 1).setOrigin(0.5, 0).setAlpha(0.8);
    // floor.setAlpha(0);
    scene.physics.add.existing(floor);
    floor.body.immovable = true;
    floor.body.allowGravity = false;
    floor.body.setMass(100000);
    this.group.add(floor);
    this.addObject('floor', floor);

    const offsetX = 200;
    const groundY = floor.y - 75;

    const { controlConfig, defaultFighterConfig, fighterAnims } = FighterConfig;
    this.createFighterAnimations(scene, fighterAnims);

    const fighter1 = new Fighter(scene, centerX - offsetX, groundY, { config: { ...defaultFighterConfig, character: 'blood', key:'fighter1' }, facing: 'right' });
    const f1Controls = this.setFighterControls(scene, controlConfig.fighter1);

    const fighter2 = new Fighter(scene, centerX + 200, groundY, { config: { ...defaultFighterConfig, character: 'blood', key:'fighter2' }, facing: 'left' });
    const f2Controls = this.setFighterControls(scene, controlConfig.fighter2);

    // The state machine managing the hero
    const stateMachines = [
      new FighterStateMachine({
        key: 'fighter1',
        floor,
        fighter: fighter1,
        controls: f1Controls,
      }, scene),
      new FighterStateMachine({
        key: 'fighter2',
        floor,
        fighter: fighter2,
        controls: f2Controls,
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

  createFighterAnimations(scene, config) {
    const { anims } = scene;
    for(const a in config) {
      const prefix = a;
      const animData = config[a];
      animData.forEach(data => {
        const frames = anims.generateFrameNames('doctors', {
          prefix: `${prefix}/${data.key}/`,
          start: data.start,
          end: data.end || data.start,
          zeroPad: 0,
          suffix: '.png',
        });
        anims.create({
          key: `${prefix}_${data.animName || data.key}`,
          frames,
          repeat: data.repeat || 0,
          frameRate: data.fps || 10,
        });
      });
    }
  }
}
module.exports = GameLayer;