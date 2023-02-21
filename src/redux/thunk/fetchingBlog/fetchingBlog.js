import { loadBlogs, setError, setLoading } from "../../Actions/BlogsAction";

export const fetchingBlog = ()=>{
  
    return async(dispatch, getState)=>{
        dispatch(setLoading())
        try {
            const res = await fetch('http://localhost:5000/getBlog',{
               
            });
            const data = await res.json()
            console.log(data);

            if(data.length){
                dispatch(loadBlogs(data))
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    }
}
export default fetchingBlog;