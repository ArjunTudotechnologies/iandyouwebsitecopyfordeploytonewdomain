import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function RegistrationForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="m-3 mb-5">
      <p className="sub-small-title pt-5">Eshwari Kriya</p>
      <h2 className="title pb-3">Registration</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="9" lg={12} xl={9} controlId="exampleForm.SelectCustom">
            <Form.Label>Select Program</Form.Label>
            <Form.Control as="select">
              <option>Select Program</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="5" lg={12} xl={5} controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" lg={12} xl={4} controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" lg={12} xl={3} controlId="validationCustom03">
            
          </Form.Group>
          <Form.Group as={Col} md="3" lg={4} xl={3} controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" lg={4} xl={3} controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" lg={4} xl={3} controlId="validationCustom05">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" placeholder="Pincode" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid pincode.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit" size="lg">
          Register Now
        </Button>
      </Form>
    </div>
  );
}
