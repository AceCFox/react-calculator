const calculations = (state = [{}], action) => {
    switch (action.type) {
      case 'SET_CALCULATIONS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // curriculum will be on the redux state at:
  // state.footage
  export default calculations;
