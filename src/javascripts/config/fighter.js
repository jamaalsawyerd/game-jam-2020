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
    },
    maxSpeed: 10000,
    maxVel: {
      x: 500,
      y: 10000
    },
    jumpVel: {
      x: 500,
      y: 2000,
    },
    friction: { x: 1000, y: 100 },
    drag: { x: 500, y: 0 },
    worldBounce: { x: 0, y: 0},
    bounce: { x:10000, y:1000 },
    mass: 1,
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
