const displayAbout=(state ={}, action) =>{
  switch(action.type) {
    case 'SET_ABOUT':
      return action.payload;
      default:
        return state;
  }
};
export default displayAbout;