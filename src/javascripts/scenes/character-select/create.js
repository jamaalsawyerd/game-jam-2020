
const create = function() {
  console.log('create');

  const { centerX, centerY, width, height } = this.cameras.main;
  this.playerSelect = {
    player1: 'blood',
    player2: 'foot',
  };
  this.selectIndex = 1;

  this.add.image(centerX, centerY, 'csBackground');
  this.add.rectangle(0, 0, width, height, 0x000000, 0.5).setOrigin(0);
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
  this.add.image(selectSleep.x + 75, selectSleep.y - 95, 'lock').setScale(0.33).setTint(0x000000);
  this.add.image(selectEye.x + 75, selectEye.y - 95, 'lock').setScale(0.33).setTint(0x000000);

  const onClick = (select) => {
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

};


module.exports = create;