import { Col, Container, Row } from "react-bootstrap";
import { productdetails } from "@/assets/images";

export default function ProductDetails() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs lg="6">
            <div>
              <img src={productdetails?.src} />
            </div>
          </Col>
          <Col xs lg="6">
            <div className="product-info">
              <h2 className="mb-4">
                ROARING BOAR EMBROIDERY DESIGN | WILD ANIMAL EMBROIDERY DESIGN |
                BROWN BOAR MACHINE EMBROIDERY FILE
              </h2>
              <p className="price mb-4">$2.49 – $9.99</p>
              <div className="variations">
                <h3>SPECIFICATIONS</h3>
                <ul>
                  <li>
                    <b>SKU:</b> E-22060
                  </li>
                  <li>
                    <b>Design Type:</b> Machine Embroidery Design
                  </li>
                </ul>
              </div>
              <div className="variations">
                <h3>SIZES</h3>
                <ul>
                  <li>
                    <b>Hoop Size:</b> 4×4 | W: 2.96 in | H: 3.79 in | 75.1×96.2
                    mm | Stitches: 16936
                  </li>
                  <li>
                    <b>Hoop Size:</b> 6×6 | W: 4.54 in | H: 5.78 in |
                    115.3×146.8 mm | Stitches: 31731
                  </li>
                </ul>
              </div>
              <div className="variations">
                <h3>EMBROIDERY FILE FORMATS</h3>
                <ul>
                  <li>
                    10O, ART, CND, DSB, DST, DSZ, EXP, HUS, JEF, PCS, PEC, PES,
                    TAP, VIP, VP3, XXX
                  </li>
                </ul>
              </div>
              <div className="variations">
                <h3>ADDITIONAL DETAILS</h3>
                <ul>
                  <li>Color(s) Used: 6 | Color(s) Changes: 6</li>
                </ul>
              </div>
              <button className="pdf-btn">Sewing Information (PDF)</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
