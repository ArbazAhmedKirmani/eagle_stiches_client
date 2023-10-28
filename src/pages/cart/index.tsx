import React, { useState } from "react";
import Banner from "@/components/Banner";
import { productdetails } from "@/assets/images";
import CategorySidebar from "@/components/CategorySidebar";
import CategoryTopFilters from "@/components/CategoryTopFilters";
import EmbroideryDesigns from "@/components/screens/home/EmbroideryDesigns";
import ShopByCategory from "@/components/screens/home/ShopByCategory";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const [validated, setValidated] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    setValidated(true);
  };

  const handleChange = ({ target }: any) => {
    setData({ ...data, [target.name]: target.value });
  };
  return (
    <>
      <main className={`main-content-sec`}>
        <Banner />
        <Container>
          <Row>
            <Col xl="8">
              <div className="card border shadow-none">
                <div className="card-body">
                  <div>
                    <Row>
                      <Col md="2">
                        <div className="d-flex align-items-start">
                          <div className="me-4">
                            <Image
                              src={productdetails}
                              alt=""
                              className="avatar-lg rounded"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mt-3">
                          <p className="text-muted mb-2">Name</p>
                          <h5 className="mb-0 mt-2 text-truncate">
                            Dummy Product
                          </h5>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className="mt-3">
                          <p className="text-muted mb-2">Price</p>
                          <h5 className="mb-0 mt-2">$950</h5>
                        </div>
                      </Col>
                      <Col md="3">
                        <div className="mt-3">
                          <p className="text-muted mb-2">Quantity</p>
                          <div className="d-inline-flex">
                            <Form
                              noValidate
                              validated={validated}
                              onSubmit={handleSubmit}
                              onChange={handleChange}
                            >
                              <Form.Group controlId="validationCustom01">
                                <Form.Control
                                  name="quantity"
                                  required
                                  type="number"
                                />
                              </Form.Group>
                            </Form>
                          </div>
                        </div>
                      </Col>
                      <Col md="2">
                        <div className="mt-3">
                          <p className="text-muted mb-2">Total</p>
                          <h5>$950</h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <Row>
                <Col md="6">
                  <Link
                    href="/categoryproducts"
                    className="btn btn-link text-muted"
                  >
                    <FontAwesomeIcon icon={faArrowLeftLong} /> Continue Shopping{" "}
                  </Link>
                </Col>
                <Col sm="6">
                  <div className="text-sm-end mt-2 mt-sm-0">
                    <Link href="/checkout" className="btn btn-success">
                      <FontAwesomeIcon icon={faCartShopping} /> Checkout{" "}
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl="4">
              <div className="mt-5 mt-lg-0">
                <div className="card border shadow-none">
                  <div className="card-header bg-transparent border-bottom py-3 px-4">
                    <h5 className="font-size-16 mb-0">
                      Order Summary <span className="float-end">#INV001</span>
                    </h5>
                  </div>
                  <div className="card-body p-4 pt-2">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>Sub Total :</td>
                            <td className="text-end">$ 780</td>
                          </tr>
                          <tr>
                            <td>Discount : </td>
                            <td className="text-end">- $ 78</td>
                          </tr>
                          <tr>
                            <td>Shipping Charge :</td>
                            <td className="text-end">$ 25</td>
                          </tr>
                          <tr>
                            <td>Estimated Tax : </td>
                            <td className="text-end">$ 18.20</td>
                          </tr>
                          <tr className="bg-light">
                            <th>Total :</th>
                            <td className="text-end">
                              <span className="fw-bold">$ 745.2</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
