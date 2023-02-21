import { TOGGLE_DATE, UPDATE_TAGS_FILTER } from "../actionTypes/actionTypes";

// for dates filter 
export function setSortOrder(order) {
    return { type: TOGGLE_DATE, payload: order };
  }


  export function updateTagsFilter (tag){
    return{
      type: UPDATE_TAGS_FILTER, payload: tag
    };
  }