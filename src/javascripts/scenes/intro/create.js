const create = function(data) {
  this.game.scene.stop('character-select');
  const { player1, player2 } = data;
  const { centerX, centerY } = this.cameras.main;
  this.add.image(centerX, centerY, 'controlBackground');
  const start = this.add.image(centerX, centerY + 150, 'begin').setScale(0.7);
  start.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
    this.game.scene.start('main', { player1, player2 });
  });
};


module.exports = create;