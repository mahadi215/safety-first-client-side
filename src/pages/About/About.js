import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pic from '../../Assest/profile-pic (18).png'

const About = () => {
    return (
        <div id='about' className='py-5 ' style={{ backgroundColor: '#ffffff' }}>
            <Container>
                <Row xs={1} md={2} lg={2} className="g-4">

                    <Col className='d-flex align-items-center'>
                        <div className=''>
                            <h4 className='text-center'>Hello and welcome to my blog site! <br />
                             My name is <span className='text-success'><b>Kamrul Hasan</b></span>,
                            and I'm passionate about promoting health and safety products that can help people lead safer and healthier lives.</h4>
                        <p><b>As a health and safety officer</b>, I've seen firsthand how important it is to take proactive steps to prevent accidents and injuries. That's why I'm excited to share with you some of the latest and most innovative products on the market today. From high-tech safety gear to natural remedies and supplements, I'm constantly on the lookout for products that can help people stay healthy and safe.</p>
                        <p>When I'm not researching and testing out new products, I enjoy spending time with my family, hiking in the great outdoors, and practicing martial arts. I believe that living a healthy and active lifestyle is the key to both physical and mental well-being, and I try to embody that philosophy in everything I do.</p>
                        <p>Thank you for visiting my blog, and I hope you find the information and recommendations here helpful. If you have any questions or feedback, please feel free to reach out to me. Together, let's build a healthier and safer world!</p></div>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <img className='w-75 mx-auto' src={pic} alt="" />

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;