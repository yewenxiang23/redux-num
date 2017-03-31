import axios from 'axios';
export function getComment(){
  return dispatch=>{
    axios.get("http://redux-hello.haoduoshipin.com/comments").then(
      response=>{
        dispatch({type:'GET_COMMENTS',comments:response.data.comments})
      }
    )
  }
}
