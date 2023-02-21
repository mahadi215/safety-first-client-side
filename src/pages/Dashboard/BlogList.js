import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchingBlog from '../../redux/thunk/fetchingBlog/fetchingBlog';
import LoadingSpiner from '../LoadingSpiner/LoadingSpiner';

const BlogList = () => {
    const blogPosts = useSelector(state => state.blog.blogs)
    const {loading} = useSelector(state => state.blog)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchingBlog())

    }, [dispatch])

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            const url = `http://localhost:5000/deleteBlog/${id}`;
            fetch(url, {
              method: 'DELETE',
              headers: {
                authorization: `bearer ${localStorage.getItem('safe-token')}`
            }
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              toast.success('blog deleted success')
              dispatch(fetchingBlog())
            })
            .catch(error => {
                toast.error(error)
            });
        }
      };
    
  const spinner = <LoadingSpiner></LoadingSpiner>

    return (
        <div className='mx-auto p-3'>
            <h2 className='text-center mb-3'>Blog List</h2>
            { loading ? spinner :
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogPosts.map(post => (
                        <tr key={post._id}>
                            {/* <td>{post.id}</td> */}
                            <td><img className='' style={{ width: '3rem' }}
                                src={post?.image} alt="Blog post img" /></td>
                            <td>{post?.title.slice(0, 25) + '...'}</td>
                            <td>Admin</td>
                            <td>{post?.postDate}</td>
                            <td>
                                <Link className='btn btn-sm btn-warning m-2' to={`/dashboard/editBlog/${post?._id}`}>Edit</Link>
                                 
                                 <Link onClick={()=>handleDelete(post?._id)} className='btn m-2 btn-danger btn-sm' to="">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>}

        </div>
    );
};

export default BlogList;