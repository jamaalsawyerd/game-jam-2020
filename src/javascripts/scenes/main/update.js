const update = function(time, delta) {
  this.controller.onUpdate(time, delta);
};

module.exports = update;