const Manager = require('./generic');
/**
 * Manager Class for Phaser Groups
 * Nowhere near feature complete. Instantiates as a singleton
 */
class PhaserGroupManager extends Manager {
  constructor() {
    super();
    this.scene = null;
  }

  init(scene) {
    this.objs = {};
    this.scene = scene;
  }

  add(key) {
    if(this.objs[key]) {
      throw new Error('group already exists with that key');
    }
    this.objs[key] = this.scene.add.group();
    return this.objs[key];
  }
}
module.exports = new PhaserGroupManager();
