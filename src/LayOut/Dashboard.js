
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Dashboard/Sidebar';

import './Dasboard.css'

const MyDashboard = () => {
   

    return (
            <Container fluid className="main-content">
                <Row>
                    <Col md={2} className="sidebar bg-secondary">
                        <Sidebar></Sidebar>
                    </Col>
                    <Col md={10} className="content p-4">
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
    );
};

export default MyDashboard;

