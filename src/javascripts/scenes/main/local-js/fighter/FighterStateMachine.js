const StateMachine = require('../../../../shared/state-machine/StateMachine');
const IdleState = require('./states/IdleState');
const JumpState = require('./states/JumpState');
const CrouchState = require('./states/CrouchState');
const AttackOneState = require('./states/AttackOneState');
const AttackTwoState = require('./states/AttackTwoState');

class FigtherStateMachine extends StateMachine {
  constructor(stateParams = {}, scene) {
    const possibleStates = {
      idle: new IdleState(),
      jump: new JumpState(),
      crouch: new CrouchState(),
      attackOne: new AttackOneState(),
      attackTwo: new AttackTwoState(),
    };
    super('idle', possibleStates, stateParams, scene);
  }
}

module.exports = FigtherStateMachine;
