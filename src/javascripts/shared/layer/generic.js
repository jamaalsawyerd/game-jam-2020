const Manager = require('../manager/generic');

/**
 * Layer class
 */
class Layer {
  constructor(group, scene) {
    this.group = null;
    this.scene = null;
    this.keys = [];
    this.objects = new Manager();
    this.init(group, scene);
  }

  /**
   * Initialize the Game Layer Manager
   * @param {object} group this is the Phaser Group for the background 
   * @param {object} scene this is the Phaser Scene instance 
   */
  init(group, scene) {
    this.group = group;
    this.scene = scene;
    this.keys = [];
    this.objects.objs = {};
  }

  /**
   * Add to the objects manager in the layer
   * @param {string} key 
   * @param {object} obj 
   */
  addObject(key, o) {
    this.keys.push(key);
    this.objects.add(key, o);
  }

  /**
   * Get an object from the objects manager
   * @param {string} key 
   */
  getObject(key) {
    return this.objects.get(key);
  }

  /**
   * Get all objects from the objects manager
   */
  getObjects() {
    return this.keys.map(k => this.getObject(k));
  }

  /**
   * Add an Image or Sprite to the layer group
   * @param {integer} x X position
   * @param {integer} y Y position
   * @param {string} key Image key
   * @param {boolean} sprite Is this a sprite? (defaults to image)
   */

  addToLayerGroup(x, y, key, sprite) {
    const child = sprite ? this.scene.add.sprite(x, y, key) : this.scene.add.image(x, y, key);
    this.group.add(child);
    return child;
  }
}
module.exports = Layer;
