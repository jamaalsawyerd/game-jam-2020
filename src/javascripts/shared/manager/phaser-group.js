const Manager = require('./generic');

class PhaserGroupManager extends Manager {
  constructor(scene) {
    super();
    this.scene = null;
    this.init(scene);
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
module.exports = PhaserGroupManager;
