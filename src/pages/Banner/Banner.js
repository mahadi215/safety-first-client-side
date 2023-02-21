import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import './Banner.css'

const Banner = () => {
   


    return (
        <section className='banner'>
            <Container fluid className='banner-content p-5'>
                <Row>
                    <Col className=''>
                        <h2>"Committed to a Safe and Healthy Environment <br /> A Guide to Health and Safety in the Workplace"</h2>
                        <Col sm={6} className=' mx-auto'>
                           <SubscribeForm></SubscribeForm>
                        </Col>
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default Banner;