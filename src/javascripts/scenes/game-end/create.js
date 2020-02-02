
const create = function(data) {
  console.log('create');
  console.log(data);
  const { winner } = data;
  const { centerX, centerY } = this.cameras.main;
  const text = this.add.text(centerX, centerY, `Player ${winner.includes('1') ? 1 : 2} Wins!!!!`.toUpperCase()).setOrigin(0.5);
  text.setStyle({
    fontSize: '65px',
    color: '#fff',
    stroke: '#000',
    strokeThickness: 12,
  });
};

module.exports = create;