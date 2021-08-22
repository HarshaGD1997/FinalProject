import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactUsScreen = () => {
  return (
    <>
      <div className="contact_info">
        <Link className="btn btn-light" to="/">
          Go Back
        </Link>
        <Container className="container-fluid">
          <br />
          <Row>
            <Col>Email Address : TestMail@gmail.com</Col>
          </Row>
          <br />
          <Row>
            <Col>Located At : TestAddress, TestArea, Bengaluru</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactUsScreen;
