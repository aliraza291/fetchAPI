import React from "react";
import { Form, Button } from "react-bootstrap";

function About() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1>About Page</h1>
          <p>
            Building a website is, in many ways, an exercise of willpower. It’s
            tempting to get distracted by the bells and whistles of the design
            process, and forget all about creating compelling content
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
