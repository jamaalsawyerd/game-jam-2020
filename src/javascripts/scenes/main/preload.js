const preload = function() {
  console.log('preload');
  this.load.image('mainBackground', 'images/main_back.png');
  this.load.atlas('doctors', 'images/doctors.png', 'images/doctors.json');
  this.load.image('ui_back', 'images/topui.png');
  this.load.image('bar', 'images/fillbar.png');
  this.load.image('cross', 'images/cross.png');
  this.load.image('p_blood', 'images/portrait_blood.png');
  this.load.image('p_foot', 'images/portrait_foot.png');
  
};

module.exports = preload;
