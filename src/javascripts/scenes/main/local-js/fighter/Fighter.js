class Fighter extends Phaser.GameObjects.Container {
  constructor(scene, x, y, params) {
    super(scene, x, y);

    //temp 
    this.setSize(50, 100);
    this.defaultColor = params.defaultColor ? params.defaultColor : 0xffffff;
    const body = scene.add.rectangle(0, 0, 50, 100, this.defaultColor, 1);

    this.add(body);

    this._classVars = {
      body,
    };
    scene.physics.add.existing(this);
    scene.add.existing(this);
  }


  preUpdate(time, delta) {

  }
}

module.exports = Fighter;