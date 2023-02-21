import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ReadingHistory = () => {
    const {history} = useSelector(state => state.history);
    console.log(history);

    const content = <h3 className='text-center m-5'>No Reading History</h3>

    if(history.length === 0){
        return content
    }

    return (
        <Container className='my-4'>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    history.map(data => <Col key={data._id}>
                        <Card className='shadow-sm blog-card' style={{}} >
                            <Link to={`/blogDetails/${data._id}`}>
                                <Card.Img variant="top" style={{ height: '200px' }} src={data.image} />
                            </Link>
                            <Card.Body className=''>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/blogDetails/${data._id}`}>
                                    <Card.Text>{data.postDate}</Card.Text>
                                    <Card.Title>
                                        {data.title}</Card.Title>
                                    <Card.Text>
                                        {data.description.slice(0, 100) + '...'}
                                    </Card.Text></Link>
                                    <Button className='mt-2'>Already Read</Button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    )
                }
            </Row>
        </Container>

    );
};

export default ReadingHistory;