const Layer = require('../../../../shared/layer/generic');
const HealthBar = require('../HealthBar');
class UILayer extends Layer {
  constructor(group, scene) {
    super(group, scene);
    const {centerX, centerY, width, height } = scene.cameras.main;
    this.bars = new HealthBar(scene, centerX, centerY);
    this.bars.UpdateUI(centerX, centerY);
  }

  onUpdate(scene){
    const {centerX, centerY, width, height } = scene.cameras.main;
    //this.bars.UpdateUI(centerX, centerY);
  }
}
module.exports = UILayer;