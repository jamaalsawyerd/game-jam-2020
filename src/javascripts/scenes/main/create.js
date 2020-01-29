const create = function() {
  console.log('create');
  const { centerX, centerY, width, height } = this.cameras.main;
  this.add.shader('RGB Shift Field', centerX, centerY, width, height);
  this.logo = this.add.image(centerX, centerY, 'logo');
  this.logo.setAngle(-40);
  this.logo.setScale(1.25);
  this.tweens.add({
    targets: this.logo,
    duration: 20000,
    angle: 40,
    yoyo: true,
    repeat: -1,
  });
  this.tweens.add({
    targets: this.logo,
    scale: 0.33,
    duration: 30000,
    yoyo: true,
    repeat: -1,
  });
};


module.exports = create;