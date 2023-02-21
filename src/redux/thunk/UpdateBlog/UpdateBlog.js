

import { toast } from "react-hot-toast";
import { updateBlog } from "../../Actions/BlogsAction";

const updateBlogData = (blogId, blog) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/updateBlog/${blogId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
        });
        const data = await res.json();
        console.log(data);
        if (data.acknowledged) {
            dispatch(updateBlog(blog));
            toast.success('Blog Updated Successfully')
        }
    };
};

export default updateBlogData;
