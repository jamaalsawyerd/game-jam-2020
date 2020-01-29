const LocaleService = require('./locale');

/**
 * This service is intended to parse and deliver data from the locales file
 * In situations where there is level specific information the getString/getObject
 * functions will return the level specific data over the global one
 */
class GameDataService {
  constructor() {
    this.level = null;
    this.globalData = null;
    this.levelData = null;
  }

  init() {
    this.globalData = LocaleService.getObject('global');
    this.levelData = LocaleService.getObject('levels');
  }

  /**
   * Set the Game Data to override with level specific data when necessary
   * @param {number} level
   */
  setLevel(level) {
    this.level = parseInt(level, 10);
  }

  /**
   * Retreive a string from the locale global text section. Will override with level
   * version if it exists
   * @param {string} key the locale key
   */
  getString(key) {
    if(!key) {
      throw new Error('must have a key!');
    }
    let str = this.getGlobalString(key);
    if(this.getLevelString(key, this.level)) {
      str = this.getLevelString(key, this.level);
    }
    return str;
  }

  /**
   * Retreive an object from the locale global section.
   * Will override with level version if it exists
   * @param {string} key the locale key
   */
  getObject(key) {
    if(!key) {
      throw new Error('must have a key!');
    }
    let obj = this.getGlobalObject(key);
    if(this.getLevelObject(key, this.level)) {
      obj = this.getLevelObject(key, this.level);
    }
    return obj;
  }

  /**
   * Grab object from the global section explicitly
   * If no key specified will return the entire obj
   * @param {string} key the locale key
   */
  getGlobalObject(key) {
    return key ? this.globalData[key] : this.globalData;
  }

  /**
   * Grab string from the global section explicitly
   * * If no key specified will return the entire text object
   * @param {string} key the locale key
   */
  getGlobalString(key) {
    return key ? this.globalData.text[key] : this.globalData.text;
  }

  /**
   * Grab object from the level section explicitly
   * Default to set level if none provided
   * If no key provided then return the entire object
   * @param {string} key the locale key
   */
  getLevelObject(key, level) {
    const l = level || this.level;

    const lData = this.levelData ? this.levelData.find(e => e.level == l) : null;
    if(!lData) return undefined;
    return key ? lData[key] : lData;
  }

  /**
   * Grab string from the level section explicitly
   * Default to set level if none provided
   * If no key provided then return the entire text object
   * @param {string} key the locale key
   */
  getLevelString(key, level) {
    const l = level || this.level;
    if(!this.levelData) return undefined;
    const lData = this.levelData.find(e => e.level == l);
    if(!lData || !lData.text) return undefined;
    const { text } = lData;
    return key ? text[key] : text;
  }

}
module.exports = new GameDataService();
