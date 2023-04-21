import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import approved from '../../../src/Images/approved.jpg';

const Approved = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={12} lg={12} sm={12} className="text-center mb-5">
                    <div className="section-title mt-5">
                        <h1>Your request has been accepted</h1>
                        <h2>Click below to start detection</h2>
                        <button className="theme-btn btn-fill form-btn mt-5" ><a href="http://127.0.0.1:5000/">predict</a></button>
                    </div>
                </Col>
                <Col md={12} lg={12} sm={12}>
                    <img src={approved} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Approved;