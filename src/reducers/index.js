function helloReducer(state=[],action){
  switch (action.type) {
    case 'GET_USERNAME':
    return action.userInfo;
      break;
    default:
    return state;
  }
}
export default helloReducer;
