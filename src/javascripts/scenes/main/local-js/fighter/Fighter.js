class Fighter extends Phaser.GameObjects.Container {
  constructor(scene, x, y, params) {
    super(scene, x, y);
    const { config } = params;
    this.config = config;
    //temp
    const width = 75;
    const height = 260; 
    this.setSize(width, height);
    this.defaultColor = params.defaultColor ? params.defaultColor : 0xffffff;
    const sprite = scene.add.rectangle(0, 0, width, height, this.defaultColor, 1);

    this.add(sprite);

    this._classVars = {
      sprite,
    };
    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true, config.worldBounce.x, config.worldBounce.y);
    this.body.setMaxSpeed(config.maxSpeed);
    this.body.setAllowDrag(true);
    this.body.setDrag(config.drag.x, config.drag.y);
    this.body.setFriction(config.friction.x, config.friction.y);
    scene.add.existing(this);
  }


  preUpdate(time, delta) {

  }
}

module.exports = Fighter;