import { toast } from "react-hot-toast";
import { addBlog } from "../../Actions/BlogsAction";


const addBlogData = (blog) => {
    return async(dispatch, getState)=>{
        const res = await fetch('http://localhost:5000/addBlog',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(blog),

        });
        const data =await res.json();
        if(data.acknowledged){
            dispatch(addBlog(blog))
            toast.success('Blog Added Succesfull')
        }
};
};

export default addBlogData;