const update = function(time, delta) {
    if (this._timeToEnd > 0){
        --this._timeToEnd;
    } else if (!this._transition){
        this._transition = true;
        this.game.scene.start("credits");
    }
};

module.exports = update;