/**
 * Manager for the Camera and its scrolling position
 */
class CameraManager {
  init(scene) {
    this.scene = scene;
  }

  /**
   * Set the scroll position of the camera
   * @param {number} x 
   * @param {number} y 
   */
  setPosition(x, y) {
    this.scene.cameras.main.setScroll(
      x || this.scene.cameras.main.scrollX,
      y || this.scene.cameras.main.scrollY
    );
  }

  /**
   * Tween the scroll position of the camera
   * @param {number} x 
   * @param {number} y 
   * @param {number} duration 
   * @param {number} delay 
   * @param {function} onComplete 
   * @param {number} completeDelay 
   */
  tweenPosition(x, y, duration, delay, onComplete, completeDelay, ease = 'Linear') {
    this.scene.tweens.add({
      targets: this.scene.cameras.main,
      duration: duration,
      scrollX: x,
      scrollY: y,
      ease,
      delay,
      completeDelay,
      onComplete,
    });
  }
}

module.exports = new CameraManager();