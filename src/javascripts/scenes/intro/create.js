const create = function() {
  const {centerX, centerY} = this.cameras.main;
  this.add.sprite(centerX, centerY, 'controlBackground');
  this._f = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
  this._g = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
  this._n = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
  this._m = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

  this._playerOneReady = false;
  this._playerTwoReady = false;
  this._start = false;
};


module.exports = create;