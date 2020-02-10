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
  this.load.audio('thud', 'audio/thud.mp3');
  this.load.audio('ding', 'audio/ding.mp3');
  this.load.audio('restart', 'audio/restart.mp3');

  
  this.load.audio('blood_attack', 'audio/blood_attack.mp3');
  this.load.audio('blood_connect', 'audio/blood_connect.mp3');
  this.load.audio('blood_hit', 'audio/blood_hit.mp3');
  this.load.audio('blood_idle', 'audio/blood_idle.mp3');
  this.load.audio('blood_jump', 'audio/blood_jump.mp3');



  this.load.audio('foot_attack', 'audio/foot_attack.mp3');
  this.load.audio('foot_connect', 'audio/foot_connect.mp3');
  this.load.audio('foot_hit', 'audio/foot_hit.mp3');
  this.load.audio('foot_idle', 'audio/foot_idle.mp3');
  this.load.audio('foot_jump', 'audio/foot_jump.mp3');
  
};

module.exports = preload;
