import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import { Logo } from "@/assets/images";
import { logoNike } from "@/assets/images";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const TopHeaderSection = () => {
  return (
    <Container fluid>
      <Row className="header-top-bar-row">
        <Col xl={4} lg={4} md={4} sm={10} xs={9}>
          <div className="logo">
            <Link href={"/"}>
              <Image
                width={150}
                alt="Eagle Stitches Logo"
                src={Logo}
                placeholder="blur"
                blurDataURL="data:..."
              />
            </Link>
          </div>
        </Col>
        <Col xl={8} lg={8} md={8} sm={2} xs={3} className="navigation-col">
          <div className="nav-user-cart-col">
            <div className="user-sec icon-sec">
              <Link href={"#"}>
                <FontAwesomeIcon icon={faUser} color="#fff" width={18} />
              </Link>
            </div>
            <div className="cart-sec icon-sec">
              <Link href={"#"}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  color="#fff"
                  width={18}
                />
              </Link>
            </div>

            <Navbar expand={false} className="hamburger-menu">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${false}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${false}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopHeaderSection;
