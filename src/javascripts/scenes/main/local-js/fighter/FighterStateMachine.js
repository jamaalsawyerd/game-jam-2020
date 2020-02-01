const StateMachine = require('../../../../shared/state-machine/StateMachine');
const IdleState = require('./states/IdleState');
const JumpState = require('./states/JumpState');
const CrouchState = require('./states/CrouchState');
const AttackOneState = require('./states/AttackOneState');
const AttackTwoState = require('./states/AttackTwoState');
const HitState = require('./states/HitState');
const MoveState = require('./states/MoveState');

class FigtherStateMachine extends StateMachine {
  constructor(stateParams = {}, scene) {
    const possibleStates = {
      idle: new IdleState(),
      jump: new JumpState(),
      move: new MoveState(),
      crouch: new CrouchState(),
      attackOne: new AttackOneState(),
      attackTwo: new AttackTwoState(),
      hit: new HitState(),
    };
    super('idle', possibleStates, stateParams, scene);
  }
}

module.exports = FigtherStateMachine;
