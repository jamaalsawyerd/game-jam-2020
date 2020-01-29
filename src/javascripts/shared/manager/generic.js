/**
 * Generic Manager Class 
 * adds things by key and gets them 
 */
class Manager {
  constructor() {
    this.objs = {};
  }

  /**
   * Add an object with a key value
   * @param {string} key 
   * @param {object} o 
   */
  add(key, o) {
    if(this.objs[key]) {
      throw new Error('object already exists with that key');
    }
    this.objs[key] = o;
  }

  /**
   * Get an object by key value
   * @param {string} key 
   */
  get(key) {
    if(!this.objs[key]) {
      throw new Error('no object exists with that key');
    }
    return this.objs[key];
  }
}
module.exports = Manager;
