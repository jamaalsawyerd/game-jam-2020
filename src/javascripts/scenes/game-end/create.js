
const create = function(data) {
  console.log('create');
  if(!data.winner) {
    data = {
      winner: 'player1',
      character: 'blood',
    };
  }
  const { winner, character } = data;
  const { centerX, centerY } = this.cameras.main;

  const textOffsetX = 100;
  const portraitOffset = 250;

  this.add.sprite(centerX + textOffsetX, centerY, 'gameOverBackground').setScale(0.7, 0.6);
  this.add.sprite(centerX - portraitOffset, centerY, character).setScale(0.7);

  const str = `Player ${winner.includes('1') ? 1 : 2} Wins!  `.toUpperCase();
  const text = this.add.text(centerX + textOffsetX + 20, centerY - 10, str).setOrigin(0.5);
  text.setStyle({
    fontFamily: 'Bangers',
    fontSize: '85px',
    color: '#fff',
  });

  this.time.delayedCall(3000, () => {
    this.game.scene.start('credits');
  });


};

module.exports = create;