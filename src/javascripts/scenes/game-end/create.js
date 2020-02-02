
const create = function(data) {
  console.log('create');
  console.log(data);
  const { winner, character } = data;
  const { centerX, centerY } = this.cameras.main;

  const textOffsetX = 100;
  const portraitOffset = 250;

  this.add.sprite(centerX + textOffsetX, centerY, 'gameOverBackground').setScale(0.7, 0.6);
  this.add.sprite(centerX - portraitOffset, centerY, character).setScale(0.7);
  const text = this.add.text(centerX +textOffsetX, centerY, `Player ${winner.includes('1') ? 1 : 2}\nWins!!!!`.toUpperCase()).setOrigin(0.5);
  text.setStyle({
    fontSize: '65px',
    color: '#fff',
    stroke: '#000',
    strokeThickness: 12,
  });

  this._timeToEnd = 180;
  this._transistion = false;
};

module.exports = create;