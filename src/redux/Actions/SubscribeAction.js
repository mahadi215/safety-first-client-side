import { ADD_SUBSCRIBE, GET_MESSAGE, GET_SUBSCRIBE, SEND_MESSAGE } from "../actionTypes/actionTypes";


export function addSubscribe (email){
    return{
      type: ADD_SUBSCRIBE,
       payload: email
    };
  }
export function loadSubscriber (data){
    return{
      type: GET_SUBSCRIBE,
       payload: data
    };
  }
    // for message 
export function addmsg (data){
    return{
      type: SEND_MESSAGE,
       payload: data
    };
  }
export function loadmsg (data){
    return{
      type: GET_MESSAGE,
       payload: data
    };
  }