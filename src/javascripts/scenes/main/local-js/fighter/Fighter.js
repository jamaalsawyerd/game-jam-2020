class Fighter extends Phaser.GameObjects.Container {
  constructor(scene, x, y, params) {
    super(scene, x, y);
    const { config, facing } = params;
    this.config = config;
    this.facing = facing;
    this.isInvincible = false;

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

    const particles = scene.add.particles('cross');
    const xRange = 70;
    const yRange = 80;
    const emitter = particles.createEmitter({
      x: { min: -xRange, max: xRange },
      y: { min: -yRange, max: yRange },
      scale: 0.5,
      alpha: { start: 0.75, end: 0 },
      frequency: 40,
      lifespan: 400,
      speedY: { min: -300, max: -400 },
      active: true,
    });
    this.add(particles);
    emitter.stop();


    this._classVars = {
      sprite,
      rect,
      attackOneHitbox,
      particles,
      emitter,
    };

    scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true, config.worldBounce.x, config.worldBounce.y);
    this.body.setMaxSpeed(config.maxSpeed);
    this.body.setMaxVelocity(config.maxVel.x, config.maxVel.y);
    this.body.setAllowDrag(true);
    this.body.setDrag(config.drag.x, config.drag.y);
    this.body.setFriction(config.friction.x, config.friction.y);
    this.body.setMass(config.mass);
    this.health = 0;
    this.damage = config.damage;
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

  emitParticles(time) {
    this._classVars.emitter.start();
    this.scene.time.delayedCall(time, () => this._classVars.emitter.stop());
  }

  setInvincible() {
    this.isInvincible = true;
    this.scene.tweens.addCounter({
      from: 0,
      to: 1,
      repeat: 51,
      duration: 10,
      onRepeat: () => {
        this.setAlpha(this.alpha === 1 ? 0 : 1);
      },
      onComplete: () => {
        this.isInvincible = false;
        this.setAlpha(1);
      }
    });
  }

}

module.exports = Fighter;