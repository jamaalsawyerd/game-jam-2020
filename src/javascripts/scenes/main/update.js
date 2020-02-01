const update = function() {
  const { _gameVars } = this;
  const { layers } = _gameVars;
  const fighter = layers.game.getObject('fighter');
  const floor = layers.game.getObject('floor');
  this.physics.world.collide(fighter, floor);
};

module.exports = update;