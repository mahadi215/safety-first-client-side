import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder, } from '../../redux/Actions/filter';
import fetchingBlog from '../../redux/thunk/fetchingBlog/fetchingBlog';
import BlogCard from '../BlogCard/BlogCard';
import LoadingSpiner from '../LoadingSpiner/LoadingSpiner';
import './Blog.css'

const Blog = () => {
    const dispatch = useDispatch()
    const blogDatas = useSelector((state) => state.blog.blogs)
    const {loading,} = useSelector((state) => state.blog)
    const Order = useSelector(state => state.filters.datesOrder)
    const filters = useSelector(state => state.filters)
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(6);

    useEffect(() => {
        dispatch(fetchingBlog())

    }, [dispatch])

    const handleOrderChange = order => {
        dispatch(setSortOrder(order));
    };

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    let sortedBlogs = [...blogDatas];
    if (Order === 'last') {
        sortedBlogs.reverse();
    }
    if (filters.tagsFilter.length > 0) {
        sortedBlogs = blogDatas.filter((data) => {
            if (filters.tagsFilter.length === 0) return true; // show all cards if no tags are selected
            return data.tags.some((tag) => filters.tagsFilter.includes(tag));
        });
    }

    // Logic for displaying current blogs
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedBlogs.length / blogsPerPage); i++) {
        pageNumbers.push(i);
    }

    const activeClass = "text-white  bg-success border-white";

    if(loading){
        return <LoadingSpiner></LoadingSpiner>
    }
    return (
        <section className=' py-4 ' style={{ backgroundColor: '#efefef' }}>
            <Container id='blog' className='my-4'>
            <h3 className='text-center text-success'>Our Article</h3>
            <div className='d-flex justify-content-between my-4'>
                <div>
                <button onClick={() => handleOrderChange('true')}
                    className={`border px-3 py-2 rounded-5 font-semibold me-2 ${Order === 'true' ? activeClass : ''} `}>
                    Clear Fillter
                </button>
                </div>
               <div>
               <button onClick={() => handleOrderChange('first')}
                    className={`border px-3 py-2 rounded-5 font-semibold me-2 ${Order === 'first' ? activeClass : ''} `}>
                    First Upload
                </button>
                <button onClick={() => handleOrderChange('last')}
                    className={`border px-3 py-2 rounded-5 font-semibold ${Order === 'last' ? activeClass : ''}`}>
                    Last Upload
                </button>
               </div>
            </div>
            <Row xs={1} md={2} lg={3} className="g-5">
                {
                    currentBlogs.map(data => <BlogCard key={data._id} data={data}>
                    </BlogCard>
                    )
                }
            </Row>
            <div className='d-flex justify-content-center mt-5'>
                <ul className="pagination">
                    {pageNumbers.map(number => {
                        return (
                            <li key={number} className="page-item ">
                                <button
                                    id={number}
                                    className={` ${currentPage === number ? " page-link bg-success text-light" : 'page-link bg-dark text-light'}`}
                                    onClick={handleClick}
                                >
                                    {number}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Container>
        </section>
    );
};

export default Blog;
