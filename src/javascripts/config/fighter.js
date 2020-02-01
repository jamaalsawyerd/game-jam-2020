const FighterConfig = {
  defaultFighterVars: {
    isHit: false,
    isRecovering: false,
    character: 'default',
    directionFacing: 'right',
    health: 100,
  },
  controlConfig: {
    fighter1: {
      left: 'a',
      right: 'd',
      up: 'w',
      down:'s',
      attack1:'f',
      attack2:'g'
    },
    fighter2: {
      left: 'left',
      right: 'right',
      up: 'up',
      down:'down',
      attack1:'comma',
      attack2:'period'
    }
  }
};

module.exports = FighterConfig;
