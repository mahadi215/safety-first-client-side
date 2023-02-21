const BlogsMiddleware = (store)=> (next)=> (action)=>{
return next(action);
}
export default BlogsMiddleware;