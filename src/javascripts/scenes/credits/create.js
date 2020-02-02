
const create = function() {
  console.log('credits create');
  const { centerX, centerY, width, height } = this.cameras.main;
  this.add.rectangle(centerX, centerY, width, height, 0x000000, 1);
  const spriteHeight = 0; 
  this.add.sprite(centerX, centerY - spriteHeight, 'credits');
  
  
};

function createText(x, y, scene){
  const text = scene.add.text(x, y, `Player ${winner.includes('1') ? 1 : 2}\nWins!!!!`.toUpperCase()).setOrigin(0.5);
  text.setStyle({
    fontSize: '65px',
    color: '#fff',
    stroke: '#000',
    strokeThickness: 12,
  });
}


module.exports = create;