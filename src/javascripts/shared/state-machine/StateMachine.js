class StateMachine {
  constructor(initialState, possibleStates, stateParams = {}, scene) {
    this.initialState = initialState;
    this.possibleStates = possibleStates;
    this.stateParams = stateParams;
    this.state = null;
    this.scene = scene;

    // State instances get access to the state machine via this.stateMachine.
    for(const state of Object.values(this.possibleStates)) {
      state.stateMachine = this;
    }
  }

  step() {
    // On the first step, the state is null and we need to initialize the first state.
    if(this.state === null) {
      this.state = this.initialState;
      this.possibleStates[this.state].enter(this.scene, this.stateParams);
    }

    // Run the current state's execute
    this.possibleStates[this.state].execute(this.scene, this.stateParams);
  }

  transition(newState, enterParams) {
    this.state = newState;
    this.possibleStates[this.state].enter(this.scene, this.stateParams, enterParams);
  }
}

module.exports = StateMachine;
