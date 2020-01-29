/**
 * This service saves our data to cookies in JSON format
 */
class StorageService {
  constructor() {
    this.prefix = null;
  }

  /**
   * Initialize the prefix that the data is being saved with
   * @param {string} key prefix key to use
   */
  init(key) {
    this.prefix = key;
  }

  /**
   * Check that the service is using a prefix
   */
  checkPrefix() {
    if(!this.prefix) {
      throw new Error('no prefix set for StorageService');
    }
  }

  /**
   * Save data in localStorage
   * @param {string} key 
   * @param {object} data 
   */
  saveData(key, data) {
    this.checkPrefix();
    this.savePrefixedData(this.prefix, key, data);
  }

  /**
   * Get JSON data from localStorage
   */
  getData(key) {
    this.checkPrefix();
    return this.getPrefixedData(this.prefix, key);
  }

  /**
   * Get data from prefix not initiated
   * @param {string} prefix 
   * @param {string} key 
   */
  getPrefixedData(prefix, key) {
    const result = localStorage.getItem(`${prefix}_${key}`);
    if(result) {
      return JSON.parse(result);
    }
    return undefined;
  }

  /**
   * Save data from prefix not initiated
   * @param {string} prefix 
   * @param {string} key 
   */
  savePrefixedData(prefix, key, data) {
    localStorage.setItem(`${prefix}_${key}`, JSON.stringify(data));
  }
}

module.exports = new StorageService();
