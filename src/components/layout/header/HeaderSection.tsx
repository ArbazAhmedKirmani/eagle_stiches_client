import { useState, useEffect } from "react";
// import { AllMenusItems, HEADER_ROUTE } from "@/utils/constants/routes.constant";
import Link from "next/link";
// import { useRouter } from "next/router";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import { Logo, NoImage } from "@/assets/images";
import { logoNike } from "@/assets/images";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import TopHeaderSection from "./TopHeaderSection";
import { AllMenusItems } from "@/utils/constants/routes.constant";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderSection = () => {
  const [route, setRoute] = useState<string>("");

  // const location = useRouter();
  // const setRouteOnClick = () => {
  //   let pathname = location.asPath;
  //   let selectedKeys = pathname.substr(1);
  //   let routeArray = selectedKeys.split("/");
  //   let defaultOpenKeys: string =
  //     routeArray?.[0] === "" ? HEADER_ROUTE.HOME : routeArray?.[0];
  //   setRoute(defaultOpenKeys);
  // };

  // useEffect(() => {
  //   setRouteOnClick();
  // }, [location]);

  console.log("NoImage", NoImage);

  return (
    <header className={"headerSec"}>
      <TopHeaderSection />
      <Container>
        <Row>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="navigation-bottom-row"
          >
            <Navbar expand="lg" className={`navbar-sec`}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" activeKey={route}>
                  {AllMenusItems.map(
                    (menu, index) =>
                      menu.dropDownMenu ? (
                        <NavDropdown
                          key={index}
                          // as={Link}
                          // href={menu?.linkTo}
                          title={menu.label}
                          id="navbarScrollingDropdown"
                          className={`nav-item ${
                            route === menu?.linkTo && "active"
                          }`}
                        >
                          {menu.dropDownMenu.map((menuItem, index) => (
                            <NavDropdown.Item
                              href={menuItem.linkTo}
                              key={index}
                            >
                              {menuItem.label}
                            </NavDropdown.Item>
                          ))}
                        </NavDropdown>
                      ) : (
                        <Nav.Link
                          key={index}
                          href={menu?.linkTo}
                          className={`nav-item ${
                            route === menu?.linkTo && "active"
                          }`}
                        >
                          {menu.label}
                        </Nav.Link>
                      )

                    // <li
                    //   key={index}
                    //   className={`nav-item ${
                    //     route === menu?.linkTo && "active"
                    //   }`}
                    // >
                    //   <Link href={menu?.linkTo}>
                    //     <span>{menu.label}</span>
                    //   </Link>
                    // </li>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderSection;
