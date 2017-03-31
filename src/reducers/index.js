function helloReducer(state=[],action){
  switch (action.type) {
    case 'GET_COMMENTS':
    return action.comments;
      break;
    default:
    return state;
  }
}
export default helloReducer;
