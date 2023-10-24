import React, { useState } from "react";
import Image from "next/image";
import { PaypalImage } from "@/assets/images";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  faArrowLeftLong,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "@/components/Banner";

export default function Cart() {
  const [validated, setValidated] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleChange = ({ target }: any) => {
    setData({ ...data, [target.name]: target.value });
  };

  return (
    <main className={`main-content-sec checkout`}>
      <Banner />
      <Container>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <Row>
            <Col md={7} className="billing-detail-col">
              <h4 className="mb-3">Billing Address</h4>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  controlId="validationFirstName"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    required
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  controlId="validationLastName"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    required
                    type="text"
                    placeholder="Last name"
                  />
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validatioCompanyName"
                >
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    name="companyName"
                    required
                    type="text"
                    placeholder="Company Name"
                  />
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validationCountry"
                >
                  <Form.Label>Country / Region</Form.Label>
                  <Form.Select placeholder="Select Country / Region">
                    <option disabled defaultValue={""}>
                      Select an option
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validatioStreetAddress"
                  className="street-address-field"
                >
                  <Form.Label>Street address</Form.Label>
                  <Form.Control
                    name="streetAddress"
                    required
                    type="text"
                    placeholder="Street Address "
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validatioStreetAddress2"
                >
                  <Form.Control
                    name="streetAddress2"
                    required
                    type="text"
                    placeholder="Street Address "
                  />
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validatioTowCity"
                >
                  <Form.Label>Town / City</Form.Label>
                  <Form.Control
                    name="townCity"
                    required
                    type="text"
                    placeholder="Town / City"
                  />
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validationState"
                >
                  <Form.Label>State</Form.Label>
                  <Form.Select placeholder="Select State">
                    <option disabled defaultValue={""}>
                      Select an option
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validationZipcode"
                >
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    name="zipCode"
                    type="text"
                    placeholder="Zip Code"
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validationEmailAddress"
                >
                  <Form.Label>Email Address</Form.Label>

                  <Form.Control
                    name="email"
                    required
                    type="email"
                    placeholder="Email Address"
                  />
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validationPhone"
                >
                  <Form.Label>Phone</Form.Label>

                  <Form.Control
                    name="phone"
                    required
                    type="number"
                    placeholder="Phone"
                  />
                </Form.Group>
              </Row>

              <Row className="checkout-field-row">
                <Form.Group
                  as={Col}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  controlId="validationInfo"
                >
                  <Form.Label>Additional Information</Form.Label>

                  <Form.Control
                    name="info"
                    as="textarea"
                    placeholder="Additional Information"
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Row>
            </Col>
            <Col md={5} className="cart-col">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span>Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <Form.Group
                    as={Col}
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    controlId="validatioStreetAddress"
                    className="paypal-option"
                  >
                    <Form.Check // prettier-ignore
                      type={"radio"}
                      id={`default-radio`}
                      label={`PayPal`}
                    />
                  </Form.Group>
                  <Col
                    xl={9}
                    lg={9}
                    md={9}
                    sm={9}
                    xs={9}
                    className="paypal-image"
                  >
                    <Image
                      alt="Paypal"
                      src={PaypalImage}
                      placeholder="blur"
                      blurDataURL="data:..."
                    />
                  </Col>
                </li>
              </ul>
              <Button type="submit" className="proceed">
                <FontAwesomeIcon icon={faCartShopping} /> Proceed to checkout
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </main>
  );
}
