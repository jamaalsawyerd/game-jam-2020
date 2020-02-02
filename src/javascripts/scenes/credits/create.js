
const create = function() {
  console.log('credits create');
  const { centerX, centerY, width, height } = this.cameras.main;
  this.add.sprite(centerX, centerY, 'credits');

  //this.add.rectangle(centerX, centerY, width, height, 0x808080, 1);
  // const spriteHeight = 50; 
  // this.add.sprite(centerX, centerY - spriteHeight, 'credits').setScale(0.8);
  // this.add.sprite(centerX, centerY - spriteHeight - 40, 'ggjLogo').setScale(0.2);
  // const credits = [
  //   "Potentially Long Roll : Potentially Long Name",
  //   "Short Roll : Short Name", 
  //   "Third Name : Hello World",
  //   "A lot of : Names",
  // ]
  // const yOffset = 50;
  // for (var i = 0; i < credits.length; ++i){
  //   createText(centerX, centerY + yOffset * i, credits[i],  this);
  // }
  // const xOffset = 350;
  // this.add.sprite(centerX-xOffset, centerY + width / 6, 'leftchars').setScale(0.5);
  // this.add.sprite(centerX + xOffset, centerY + width/ 6, 'rightchars').setScale(0.5);
};

function createText(x, y, message, scene){
  const parts = message.split(":");
  const xOffset = 20;
  const role = scene.add.text(x- xOffset, y, parts[0]).setOrigin(1, 0.5);
  role.setStyle({
    fontSize: '30px',
    color: '#fff',
    stroke: '#000',
    strokeThickness: 8,
  });
  const name = scene.add.text(x + xOffset, y, parts[1]).setOrigin(0, 0.5);
  name.setStyle({
    fontSize: '30px',
    color: '#fff',
    stroke: '#000',
    strokeThickness: 8,
  });

}


module.exports = create;