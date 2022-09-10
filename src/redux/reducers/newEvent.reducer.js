const displayNew=(state ={}, action) =>{
    switch(action.type) {
      case 'SET_NEW':
        return action.payload;
        default:
          return state;
    }
  };
  export default displayNew;