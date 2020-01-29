/**
 * This service is intended to emulate the LocaleService of the 
 * EverFi environment. Grabs strings or objects from JSON file.
 */
class LocaleService {
  constructor() {
    this.data = null;
  }

  /**
   * Initialize the service with the proper JSON file
   * @param {string} key name of JSON in the locales folder
   */
  init(key) {
    this.data = this.getLocaleObject(key);
    this.checkData();
  }

  getLocaleObject(key) {
    return require(`!../../locales/${key}.json`);
  }

  /**
   * Check to make sure that data has loaded
   */
  checkData() {
    if(!this.data) {
      throw new Error('could not find locale data');
    }
  }

  /**
   * Returns the full data file
   */
  getData() {
    this.checkData();
    return this.data();
  }

  /**
   * Get a string from the locales JSON
   * @param {string} key 
   */
  getString(key) {
    this.checkData();
    const str = this.data[key];
    if(typeof str !== 'string') {
      throw new Error('string not found');
    }
    return str;
  }

  /**
   * Get an object from the locales JSON
   * @param {object} key
   */
  getObject(key) {
    this.checkData();
    const obj = this.data[key];
    return obj;
  }

}
module.exports = new LocaleService();