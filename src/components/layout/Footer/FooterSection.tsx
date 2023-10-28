import { useState, useEffect, useCallback } from "react";
import {
  FooterAllMenusItems,
  HEADER_ROUTE,
} from "@/utils/constants/routes.constant";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Logo } from "@/assets/images";
import { logoNike } from "@/assets/images";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import FacebookIcon from "@/assets/all-eagle-svg-files/facebookicon";
import InstagramIcon from "@/assets/all-eagle-svg-files/instagramicon";
import PinterestIcon from "@/assets/all-eagle-svg-files/pinteresticon";

const FooterSection = () => {
  const [route, setRoute] = useState<string>("");

  const location = useRouter();
  const setRouteOnClick = useCallback(() => {
    let pathname = location.asPath;
    let selectedKeys = pathname.substr(1);
    let routeArray = selectedKeys.split("/");
    let defaultOpenKeys: string =
      routeArray?.[0] === "" ? "/" : routeArray?.[0];
    setRoute(defaultOpenKeys);
  }, [location.asPath]);

  useEffect(() => {
    setRouteOnClick();
  }, [location, setRouteOnClick]);

  return (
    <footer className={"footerSec"}>
      <Container>
        <Row>
          <Col xl={3} lg={3} md={12} sm={12} xs={12}>
            <div className="footerlogo">
              <Image
                width={230}
                alt="Logo"
                src={Logo}
                placeholder="blur"
                blurDataURL="data:..."
              />
              <div className="footer-s-media-sec">
                <ul>
                  <li>
                    <Link href={"#"}>
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <InstagramIcon />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <PinterestIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={3} md={6} sm={12} xs={12} className="nav-col">
            <h4>USEFUL LINKS</h4>
            <Navbar expand="lg" className={`bg-body-tertiary`}>
              <Navbar id="basic-navbar-nav">
                <Nav variant="pills" activeKey={route}>
                  <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${route === "#" && ""}`}>
                      <Link href={"#"}>
                        <span>{"CONTACT US"}</span>
                      </Link>
                    </li>

                    <li className={`nav-item`}>
                      <Link href={"#"}>
                        <span>{"PRIVACY POLICY"}</span>
                      </Link>
                    </li>

                    <li className={`nav-item`}>
                      <Link href={"#"}>
                        <span>{"TERMS AND CONDITIONS"}</span>
                      </Link>
                    </li>

                    <li className={`nav-item`}>
                      <Link href={"#"}>
                        <span>{"SITEMAP"}</span>
                      </Link>
                    </li>
                  </ul>
                </Nav>
              </Navbar>
            </Navbar>
          </Col>
          <Col xl={3} lg={3} md={6} sm={12} xs={12} className="contact-col">
            <h4>SHOP NOW</h4>
            <Navbar expand="lg" className={`bg-body-tertiary`}>
              <Navbar id="basic-navbar-nav">
                <Nav variant="pills" activeKey={route}>
                  <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${route === "#" && ""}`}>
                      <Link href={"/categoryproducts"}>
                        <span>{"EMBROIDERY DESIGNS"}</span>
                      </Link>
                    </li>

                    <li className={`nav-item`}>
                      <Link href={"/categoryproducts"}>
                        <span>{"VECTOR DESIGNS"}</span>
                      </Link>
                    </li>

                    <li className={`nav-item`}>
                      <Link href={"#"}>
                        <span>{"CUSTOM ORDER"}</span>
                      </Link>
                    </li>
                  </ul>
                </Nav>
              </Navbar>
            </Navbar>
          </Col>
          <Col xl={3} lg={3} md={6} sm={12} xs={12} className="nav-col">
            <h4>SECURE PAYMENTS</h4>
            <Navbar expand="lg" className={`bg-body-tertiary`}>
              <Navbar id="basic-navbar-nav">
                <Nav variant="pills" activeKey={route}>
                  <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${route === "#" && ""}`}>
                      <Link href={"#"}>
                        <span>{"PAYPAL"}</span>
                      </Link>
                    </li>

                    <li className={`nav-item`}>
                      <Link href={"#"}>
                        <span>{"MASTERCARD"}</span>
                      </Link>
                    </li>

                    <li className={`nav-item`}>
                      <Link href={"#"}>
                        <span>{"VISA"}</span>
                      </Link>
                    </li>
                  </ul>
                </Nav>
              </Navbar>
            </Navbar>
          </Col>
        </Row>
      </Container>

      <div className="copyright-sec">
        <Container>
          <Row>
            <div className="copyright-s-row">
              <span className="copyright-text">
                © Copyright 2023 <Link href="/">Dummy</Link> All Rights
                Reserved.
              </span>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterSection;
