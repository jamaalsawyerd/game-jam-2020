class Fighter extends Phaser.GameObjects.Container {
  constructor(scene, x, y, params) {
    super(scene, x, y);
    const { config, facing } = params;
    this.config = config;
    this.facing = facing;

    //temp
    const width = 125;
    const height = 175;
    this.setSize(width, height);
    this.defaultColor = params.defaultColor || 0xffffff;
    const rect = scene.add.rectangle(0, 0, width, height, this.defaultColor, 0);
    this.add(rect);

    const sprite = scene.add.sprite(0, height / 2, 'doctors', `${config.character}/idle/1.png`);
    sprite.setOrigin(0.5, 1).setScale(0.66);
    sprite.on('animationcomplete', (anim, frame) => {
      sprite.emit('animationcomplete_' + anim.key, anim, frame);
    });
    this.add(sprite);

    const attackOneHitbox = scene.add.rectangle(0, -30, 200, 30, 0xff0000, 0).setOrigin(0, 0.5);
    attackOneHitbox.setVisible(false);
    


    this.add(attackOneHitbox);
    this._classVars = {
      sprite,
      rect,
      attackOneHitbox,
    };

    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true, config.worldBounce.x, config.worldBounce.y);
    this.body.setMaxSpeed(config.maxSpeed);
    this.body.setMaxVelocity(config.maxVel.x, config.maxVel.y);
    this.body.setAllowDrag(true);
    this.body.setDrag(config.drag.x, config.drag.y);
    this.body.setFriction(config.friction.x, config.friction.y);
    this.body.setMass(config.mass);
    scene.add.existing(this);
    this.playAnim('idle');
    if(facing === 'left') {
      sprite.scaleX *= -1;
      attackOneHitbox.setOrigin(attackOneHitbox.originX === 0 ? 1 : 0, 0.5);
    }
  }

  playAnim(key) {
    const { config } = this;
    const { sprite } = this._classVars;
    sprite.play(`${config.character}_${key}`);
  }

  getCurrentAnim() {
    const { sprite } = this._classVars;
    const { currentAnim, isPlaying } = sprite.anims;
    return { currentAnim, isPlaying, key: sprite.anims.getCurrentKey() };
  }

}

module.exports = Fighter;