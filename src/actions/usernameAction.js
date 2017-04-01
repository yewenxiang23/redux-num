import axios from 'axios';
export function getUsername(data){
  return dispatch=>{
        dispatch({type:'GET_USERNAME',userInfo:data});
  }
}
