import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubscribeForm from '../../SubscribeForm/SubscribeForm';

const Footer = () => {

    const linkData = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Blog', link: '/' },
        { id: 2, text: 'Reading History', link: '/history' },
        { id: 3, text: 'About', link: '/' },
        { id: 4, text: 'Contact', link: '/' },
       
    ];
    return (
        <footer className=' py-3 bg-dark text-light'>
           <Container>
           <Row xs={1} md={2} lg={2}>
          <Col  className="g-5 d-flex justify-content-center">
          <div className=' d-flex flex-column py-4'>
                <h6>Useful Links</h6>
                {
                            linkData.map((item, i) => <Link key={i}
                                 to={`${item.link}`} className='f-bold p-2' style={{textDecoration:'none', fontWeight:'',color:'#efefef'}}>
                                    {item.text}
                                    </Link>
                                    )
                        }
            </div>
          </Col>
          <Col className=' d-flex align-items-center'>
          <SubscribeForm></SubscribeForm>
          </Col>
           
           </Row>
       
                <p className='text-center'>All right reservd SAFENESS | Creator MAHADI HASAN</p>
           </Container>
        </footer>
    );
};

export default Footer;