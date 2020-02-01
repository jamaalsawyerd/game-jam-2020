const update = function(time, delta) {
  const { controller } = this._gameVars;
  controller.onUpdate(time, delta);
};

module.exports = update;