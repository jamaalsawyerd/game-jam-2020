const update = function(time, delta) {
  
  if (this._f.isDown){
    this._playerOneReady = true;
  } else if (this._g.isDown){
    this._playerOneReady = true;
  } else {
    this._playerOneReady = false;
  }

  if (this._n.isDown){
    this._playerTwoReady = true;
  } else if (this._m.isDown){
    this._playerTwoReady = true;
  }else{
    this._playerTwoReady = false;
  }
  
  if (!this._start && this._playerTwoReady && this._playerOneReady){
    this.game.scene.start("main");
    this._start = true;
  }
};

module.exports = update;