const create = function() {
  console.log('create');
  const {centerX, centerY } = this.cameras.main;
  this.add.image(centerX, centerY, 'logo');
};


module.exports = create;