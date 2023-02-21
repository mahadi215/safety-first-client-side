import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch,  } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToHistory } from '../../redux/Actions/BlogsAction';
import { updateTagsFilter } from '../../redux/Actions/filter';

const BlogCard = ({data}) => {
    const dispatch = useDispatch()
    // const filters = useSelector(state => state.filters)

    const handleTagClick = (tag) => {
        dispatch(updateTagsFilter(tag));
    };

    const handleClick=(data)=> {
      dispatch(addToHistory(data));
    //   console.log(data);
    }
    return (
        <Col >
            <Card className='shadow-sm blog-card' style={{}} onClick={()=>handleClick(data)}>
                <Link to={`/blogDetails/${data?._id}`}>
                    <Card.Img variant="top" style={{ height: '200px' }} src={data?.image} />
                </Link>
                <Card.Body className=''>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/blogDetails/${data?._id}`}>
                        <Card.Text>{data?.postDate}</Card.Text>
                        <Card.Title>
                            {data?.title}</Card.Title>
                        <Card.Text>
                            {data?.description.slice(0, 100) + '...'}
                        </Card.Text></Link>
                    {/* <a href="/" className='btn bg-warning p-2'>view on amazon</a> */}
                </Card.Body>
                <Card.Footer className='p-2'>
                    {
                        data?.tags.map((tag, i) => <span key={i} onClick={() => handleTagClick(tag)}
                            className='mx-1 my-4 p-1 border rounded tag-btn'>{tag}</span >)
                    }
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default BlogCard;