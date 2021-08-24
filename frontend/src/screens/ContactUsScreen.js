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
          <Row>
            <Col>
              <div className="location">
                <Col>
                  <strong>Phone Number :</strong>
                  <br />
                  9535205573
                  <br />
                  <strong>Email Address : </strong>
                  <br />
                  TestMail@gmail.com
                  <br />
                  <br />
                </Col>
                <strong>Located At : </strong>
                <br />
                MusicStory, MLA Layout,
                <br />
                Kalena Agrahara
                <br />
                Bannerghatta Road
                <br />
                Bangalore{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactUsScreen;
