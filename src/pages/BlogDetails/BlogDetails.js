import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import fetchingBlog from '../../redux/thunk/fetchingBlog/fetchingBlog';
import LoadingSpiner from '../LoadingSpiner/LoadingSpiner';

const BlogDetails = () => {
    const id = useParams({})
    const {blogs, loading} = useSelector(state=>state.blog)
    const blog = blogs.find(x => x._id === id.id)
    const dispatch = useDispatch()
    // console.log(blogs);

    useEffect(() => {
      dispatch(fetchingBlog())
  }, [dispatch])

  const restBlogs = blogs.filter(x =>x._id !== blog._id);
  const relatedBlogs = restBlogs.filter(x => {
    return x.tags.some(tag => blog.tags.includes(tag))
  })
 
   

  if(loading){
    return <LoadingSpiner></LoadingSpiner>
}
    return (
        <Container className='my-3'>
        <Row>
          <Col sm={12} md={9}>
            <Card className='mb-4'>
              
              <Card.Body>
                <h3>{blog?.title}</h3>
                <Card.Img variant="top" className='w-50 mx-auto my-4' src={blog?.image} />
                <Card.Subtitle className="my-3 text-muted ">
                  By Admin - {blog?.postDate}
                </Card.Subtitle>

                <Card.Title>{blog?.metaDesc? blog?.metaDesc : ''}</Card.Title>
                <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <h4 className='text-center mb-3'>Related Posts</h4>
            <ul>
              {
                relatedBlogs.map(relatedBlog => <Link to={`/blogDetails/${relatedBlog?._id}`} key={relatedBlog._id}
                className='d-flex align-items-center border my-3 shadow-sm' style={{textDecoration:'none'}}>
                  <img className='w-25  me-3' src={relatedBlog.image} alt="" />
                  <b>{relatedBlog.title.slice(0,35) + '...'}</b>
                  </Link>
                  )
              }

            </ul>
          </Col>
        </Row>
      </Container>
    );
};

export default BlogDetails;