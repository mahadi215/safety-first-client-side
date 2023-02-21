import { ADD_BLOG, ADD_TO_HISTORY, ERROR, LOADING, SUCCESS, UPDATE_BLOG } from "../actionTypes/actionTypes"

export const setLoading = () => {
    return {
      type: LOADING
    };
  };

export const loadBlogs = (data)=>{
    return{
        type: SUCCESS,
        payload: data,
    }
}

export const setError = (errorMessage) => {
    return {
      type: ERROR,
      payload: errorMessage
    };
  };
  
// for add blog
 export const addBlog = (data)=>{
    return{
        type: ADD_BLOG,
        payload: data,
    }
 }

//  for add reading history 
export const addToHistory = (data)=>{
    return{
        type: ADD_TO_HISTORY,
        payload: data,
    }
}

// for update blog 

export const updateBlog = (data)=>{
    return{
        type: UPDATE_BLOG ,
        payload: data
    }
}