const Layer = require('../../../../shared/layer/generic');
const HealthBar = require('../HealthBar');
class UILayer extends Layer {
  constructor(group, scene) {
    super(group, scene);
    const {centerX, centerY, width, height } = scene.cameras.main;
    x = scene.cameras.main.centerX + scene.cameras.main.scrollX;
    y = scene.cameras.main.centerY + scene.cameras.main.scrollY;
    //this.bars = new HealthBar(scene, x, y);
    // this.bars.UpdateUI(centerX, centerY);
    this.cont = scene.add.container(x, y - 200);
    this.back = scene.add.sprite(0,0,'ui_back')
    this.cont.add(this.back)
    this.left = scene.add.tileSprite(0, 0, 0, 0, 'bar')
    this.right = scene.add.tileSprite(0, 0, 0, 0, 'bar')
    this.cont.add(this.left)
    this.cont.add(this.right)
    this.cont.setScrollFactor(0,0);
    this.left.setOrigin(1, 0.5);
    this.right.setOrigin(0, 0.5);
    this.cont.setScale(0.6);

    this.Unshake()
    this.max_width = this.left.width;
    this.left.width = 0;
    this.right.width = 0;
  }

  SetUIScale(scale){
    this.cont.setScale(scale);
  }

  UpdateBar(player, amount){
    if (player == "fighter1"){
      this.left.width = amount * this.max_width
    }else {
      this.right.width = amount * this.max_width;
    }
  }

  Shake(){
    const rot = Phaser.Math.RND.between(0, 0.01);
    this.back.setRotation(rot)
    perterb = Phaser.Math.RND.between(-5, 5);
    this.left.setPosition(this.left.x, this.left.y + perterb);
    perterb = Phaser.Math.RND.between(-5, 5);
    this.right.setPosition(this.right.x, this.right.y+perterb);
  }
  Unshake(){
    const ytop = 0
    const y_offset = 5
    const x_offset = 160
    this.back.setPosition(4, ytop - y_offset);
    this.right.setPosition(x_offset, ytop)
    this.left.setPosition(-x_offset, ytop);
    this.back.setRotation(0);
  }
  onUpdate(scene){
    x = scene.cameras.main.centerX + scene.cameras.main.scrollX;
    y = scene.cameras.main.centerY + scene.cameras.main.scrollY;
    //this.bars.UpdateUI(x, y);
  }
}
module.exports = UILayer;