const Layer = require('../../../../shared/layer/generic');
const HealthBar = require('../HealthBar');
class UILayer extends Layer {
  constructor(group, scene) {
    super(group, scene);
    const { centerX, centerY, width, height } = scene.cameras.main;
    const x = scene.cameras.main.centerX + scene.cameras.main.scrollX;
    const y = scene.cameras.main.centerY + scene.cameras.main.scrollY;
    //this.bars = new HealthBar(scene, x, y);
    // this.bars.UpdateUI(centerX, centerY);
    this.cont = scene.add.container(x, y - 200);
    this.back = scene.add.sprite(0, 0, 'ui_back');
    this.cont.add(this.back);
    this.left = scene.add.tileSprite(0, 0, 0, 0, 'bar');
    this.right = scene.add.tileSprite(0, 0, 0, 0, 'bar');
    this.cont.add(this.left);
    this.cont.add(this.right);
    this.cont.setScrollFactor(0, 0);
    this.left.setOrigin(0, 0.5);
    this.left.setScale(-1);
    this.right.setOrigin(0, 0.5);
    this.cont.setScale(0.6);

    this.max_width = this.left.width;
    this.left.width = 0;
    this.right.width = 0;
    this.group.add(this.cont);
    this.group.setDepth(10);

  }

  SetUIScale(scale) {
    this.cont.setScale(scale);
  }

  UpdateBar(player, amount) {
    if(player == 'fighter1') {
      this.left.width = amount * this.max_width;
    } else {
      this.right.width = amount * this.max_width;
    }
  }

  Shake() {
    this.scene.cameras.main.shake(500, 0.02);
  }

  onUpdate(scene) {
    const x = scene.cameras.main.centerX + scene.cameras.main.scrollX;
    const y = scene.cameras.main.centerY + scene.cameras.main.scrollY;
    //this.bars.UpdateUI(x, y);
  }
}
module.exports = UILayer;