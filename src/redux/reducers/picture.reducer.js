const displayPicture=(state ={}, action) =>{
    switch(action.type) {
      case 'SET_PICTURE':
        return action.payload;
        default:
          return state;
    }
  };
  export default displayPicture;