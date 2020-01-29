
const CourseSettingsService = require('./services/course-settings-service');
const CourseUtils = require('lib/utils');

const Utils = {
  isMobile: () => {
    return /Mobi|Android/.test(navigator.userAgent) || Utils.detectIPad();
  },
  isIPad: () => {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
  },
  isIE: () => {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if(msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if(trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    return false;
  },
  delayedLoad: (time, key, scene) => {
    const callback = (successCallback) => {
      scene.time.delayedCall(time, () => {
        successCallback();
      });
    };
    scene.load.rexAwait(`delayedLoad_${key}`, { callback });
  },
  deepCopy: (obj) => {
    return JSON.parse(JSON.stringify(obj));
  },
  shuffleArray(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  },
  reverseArray(arr) {
    const newArray = [];
    for(let i = arr.length - 1; i >= 0; i -= 1) {
      newArray.push(arr[i]);
    }
    return newArray;
  },
  getURLParams: () => {
    const params = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
      params[key] = value;
    });
    return params;
  },
  uuidv4: () => {
    var d = new Date().getTime();
    if(typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  },
  convertRange: (val, min, max, newMin, newMax) => {
    return (((val - min) * (newMax - newMin)) / (max - min)) + newMin;
  },
};

module.exports = Utils;
