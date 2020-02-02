const preload = function() {
  console.log('preload');
  this.load.image('csBackground', 'images/main_back.png');
  this.load.image('select_sleep', 'images/select_sleep.png');
  this.load.image('select_blood', 'images/select_blood.png');
  this.load.image('select_foot', 'images/select_foot.png');
  this.load.image('select_eye', 'images/select_eye.png');
  this.load.image('lock', 'images/lock.png');
  this.load.image('select_text_1', 'images/txt_selectahealer1.png');
  this.load.image('select_text_2', 'images/txt_selectahealer2.png');
  this.load.image('lock', 'images/lock.png');
  this.load.image('csLogo', 'images/logo.png');
  this.load.image('csChars', 'images/intro_characters.png');
  this.load.audio('music', 'audio/music.mp3');
  this.load.audio('click', 'audio/click.mp3');
  this.load.audio('dizzy', 'audio/dizzy.mp3');
};

module.exports = preload;
