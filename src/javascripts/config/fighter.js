const FighterConfig = {
  defaultFighterConfig: {
    acceleration: {
      x: 5000,
    },
    maxSpeed: 10000,
    maxVel: {
      x: 250,
      y: 1500
    },
    jumpMaxVel: {
      x:500,
      y: 1500,
    },
    jumpVel: {
      x: 500,
      y: 1500,
    },
    friction: { x: 1000, y: 100 },
    drag: { x: 1000, y: 0 },
    worldBounce: { x: 0, y: 0 },
    bounce: { x: 1, y: 1 },
    mass: 1,
    health: 100,
    damage: 20,
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
      attack1: 'period',
      attack2: 'm'
    }
  },
  fighterAnims: {
    blood: [
      {
        key: 'attack1',
        start: 1,
      },
      {
        key: 'crouch',
        start: 1
      },
      {
        key: 'hit',
        start:1
      },
      {
        key: 'win',
        start:1
      },
      {
        key: 'lose',
        start:1
      },
      {
        key: 'idle',
        start: 1,
        end: 8,
        fps: 10,
        repeat: -1,
      },
      {
        key: 'jump',
        start: 1,
      },
      {
        animName: 'move_forward',
        key: 'move',
        start: 1,
        end: 8,
        fps: 10,
        repeat: -1
      },
      {
        animName: 'move_back',
        key: 'move',
        reverse: true,
        start:8,
        end: 1,
        fps: 10,
        repeat: -1
      }
    ],
    foot: [
      {
        key: 'attack1',
        start: 1,
        end: 7,
        fps: 30,
      },
      {
        key: 'crouch',
        start: 1
      },
      {
        key: 'hit',
        start:1
      },
      {
        key: 'win',
        start:1
      },
      {
        key: 'lose',
        start:1
      },
      {
        key: 'idle',
        start: 1,
        end: 8,
        fps: 10,
        repeat: -1,
      },
      {
        key: 'jump',
        start: 1,
      },
      {
        animName: 'move_forward',
        key: 'move',
        start: 1,
        end: 8,
        fps: 10,
        repeat: -1
      },
      {
        animName: 'move_back',
        key: 'move',
        reverse: true,
        start:8,
        end: 1,
        fps: 10,
        repeat: -1
      }
    ]
  }
};

module.exports = FighterConfig;
