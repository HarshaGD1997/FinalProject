import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import muStore from "./muStore.jpg";

const ContactUsScreen = () => {
  return (
    <>
      <div className="contact_info">
        <Link className="btn btn-light" to="/">
          Go Back
        </Link>
        <Container className="container-fluid">
          <Row>
            <Col xs={6} md={4}>
              <Image
                className="contactusImg"
                src={muStore}
                alt="img"
                roundedCircle
                fluid
              />
              <strong>Phone Number :</strong>
              <br />
              9535205573
              <br />
              <strong>Email Address : </strong>
              <br />
              TestMail@gmail.com
              <br />
              <br />
              <div className="location">
                <br />
                <br />
                <br />
                <br />
                <br />
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
