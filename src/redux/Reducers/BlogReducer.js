import { ADD_BLOG, ERROR, LOADING, SUCCESS, UPDATE_BLOG, } from "../actionTypes/actionTypes";

const initialState = {
    loading: false,
    blogs: [],
    error: false,
};

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.payload,
                error: false
            };
        case ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };



        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            };

        case UPDATE_BLOG:
            const updatedBlog = action.payload;
            const blogs = [...state.blogs]
            const blogIndex = blogs.findIndex((blog) => blog._id === updatedBlog._id);
            if (blogIndex !== -1) {
                const newState = [...state];
                newState[blogIndex] = updatedBlog;
                return newState;
            }
            return state;

        default:
            return state;
    }

};

export default BlogReducer;