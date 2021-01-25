import React from "react";
import { Form, Button, Container } from "react-bootstrap";

import "./Contact.css";

function Contact() {
  return (
    <div className="footer  pt-5 m-auto">
      <div className="row">
        <div className="col-12 ">
          <h1 className="text-center">Contact Us</h1>
          <Form className="form">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="+92" />
            </Form.Group>
            <Container className="text-center">
              <Button variant="success" size="lg" active>
                Contact Us
              </Button>
            </Container>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
