import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import fetchingSubscriber from '../../redux/thunk/fetchingSubscriber/fetchingSubscriber';
import { getMessageData } from '../../redux/thunk/messageThunk/messageThunk';
import BlogList from './BlogList';
import { FaUpload ,FaSms,FaCheckSquare} from 'react-icons/fa'

const DashboardHome = () => {
    const dispatch = useDispatch()
    const { blogs } = useSelector(state => state.blog)
    const { subscribers, message } = useSelector(state => state.subscribers)
    useEffect(() => {
        dispatch(fetchingSubscriber())
        dispatch(getMessageData())
    }, [dispatch])
    return (
        <Container>
            <Row xs={1} md={3} lg={3} className='g-5'>
                <Col>
                    <div className='bg-primary p-4 shadow-sm w-75 mx-auto rounded text-light d-flex flex-column justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center align-items-center' style={{fontSize:'30px'}}>
                            <FaUpload />
                            <h4 className='ms-3 mt-3'>{blogs.length}</h4>
                        </div>
                        <h5>Blog Published</h5>
                    </div>
                </Col>
                <Col>
                    <div className='bg-success p-4 shadow-sm w-75 mx-auto rounded text-light d-flex flex-column justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center align-items-center' style={{fontSize:'30px'}}>
                        <FaCheckSquare />
                        <h4 className='ms-3 mt-3'>{subscribers.length}</h4>
                        </div>
                        <h5>Subscribers</h5>
                    </div>
                </Col>
                <Col>
                    <div className='bg-info p-4 shadow-sm w-75 mx-auto rounded text-light d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center' style={{fontSize:'30px'}}>
                        <FaSms />
                        <h4 className='ms-3 mt-3'>{message.length}</h4>
                        </div>
                        
                        <h5>Inbox</h5>
                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <BlogList></BlogList>
            </Row>
        </Container>
    );
};

export default DashboardHome;