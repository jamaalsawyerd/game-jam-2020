const FighterConfig = {
  defaultFighterVars: {
    isHit: false,
    isRecovering: false,
    character: 'default',
    directionFacing: 'right',
  },
  defaultFighterConfig: {
    acceleration: {
      x: 5000,
      y: 100,
    },
    maxSpeed: 500,
    friction: { x: 1000, y: 100 },
    drag: { x: 1000, y: 1000 },
    worldBounce: { x: 1, y: 0},
    bounce: { x:1, y:1 }
  },
  controlConfig: {
    fighter1: {
      left: 'a',
      right: 'd',
      up: 'w',
      down: 's',
      attack1: 'f',
      attack2: 'g'
    },
    fighter2: {
      left: 'left',
      right: 'right',
      up: 'up',
      down: 'down',
      attack1: 'comma',
      attack2: 'period'
    }
  }
};

module.exports = FighterConfig;
