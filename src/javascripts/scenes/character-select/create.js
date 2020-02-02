
const create = function() {
  console.log('create');
  const music = this.sound.add('music', {
    loop:true,
    volume: 0.5,
  }).play();

  const clickFX = this.sound.add('click', {
    volume: 1,
  });

  const { centerX, centerY, width, height } = this.cameras.main;
  this.playerSelect = {
    player1: 'blood',
    player2: 'foot',
  };
  this.selectIndex = 1;

  this.add.image(centerX, centerY, 'csBackground');
  const rect = this.add.rectangle(0, 0, width, height, 0x000000, 0.5).setOrigin(0);

  const selContainer = this.add.container(0, 0);


  const selectText = this.add.image(centerX, 0, 'select_text_1').setOrigin(0.5, 0).setScale(0.5);
  const selectOffsetX = 210;
  const startX = 160;
  const selectBlood = this.add.image(startX + selectOffsetX * 0, centerY + 50, 'select_blood').setScale(0.5);
  const selectFoot = this.add.image(startX + selectOffsetX * 1, centerY + 50, 'select_foot').setScale(0.5);
  const selectSleep = this.add.image(startX + selectOffsetX * 2, centerY + 50, 'select_sleep').setScale(0.5);
  const selectEye = this.add.image(startX + selectOffsetX * 3, centerY + 50, 'select_eye').setScale(0.5);
  const pipeline = this.plugins.get('RexHslAdjustPipeline').add(this, 'cs_colorpipe');
  pipeline.setSatAdjust(0);
  selectEye.setPipeline('cs_colorpipe');
  selectSleep.setPipeline('cs_colorpipe');
  const lock1 = this.add.image(selectSleep.x + 75, selectSleep.y - 95, 'lock').setScale(0.33).setTint(0x000000);
  const lock2 = this.add.image(selectEye.x + 75, selectEye.y - 95, 'lock').setScale(0.33).setTint(0x000000);

  const onClick = (select) => {
    clickFX.play();
    this.playerSelect[`player${this.selectIndex}`] = select;
    this.selectIndex++;
    if(this.selectIndex > 2) {
      const { player1, player2 } = this.playerSelect;
      this.game.scene.start('intro', { player1, player2 });
      this.game.scene.stop('character-select');
    } else {
      selectText.setTexture('select_text_2');
    }
  };

  selectBlood.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
    onClick('blood');
  });

  selectFoot.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
    onClick('foot');
  });

  selContainer.add([
    selectText,
    selectBlood,
    selectFoot,
    selectSleep,
    selectEye,
    lock1,
    lock2,
  ]);

  selContainer.setVisible(false);

  const introContainer = this.add.container(0, 0);
  const logo = this.add.image(centerX, 125, 'csLogo').setScale(0.5);
  const chars = this.add.image(centerX, height - 150, 'csChars').setScale(0.6);
  introContainer.add([
    logo,
    chars
  ]);

  this.time.delayedCall(2000, () => {
    introContainer.setVisible(false);
    selContainer.setVisible(true);
  });


};


module.exports = create;