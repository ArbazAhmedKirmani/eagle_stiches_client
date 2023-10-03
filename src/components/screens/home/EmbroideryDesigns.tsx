import Container from "react-bootstrap/Container";

import { Button, Col, Row } from "react-bootstrap";
import ProductCard from "@/components/general/CustomComponents/ProductCard";
import { ProductCardData } from "@/utils/constants/data/product.data";
import CustomPrimaryHeading from "@/components/general/UiComponents/CustomPrimaryHeading/CustomPrimaryHeading";

const EmbroideryDesigns = () => {
  return (
    <div className={"prod-sec"}>
      <div className="prod-row">
        <Container>
          <CustomPrimaryHeading headingTag="h1" className="sec-heding">
            EMBROIDERY DESIGNS
          </CustomPrimaryHeading>
          <Row>
            <ProductCard data={ProductCardData} />
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="view-all-btn-sec">
                <Button className="view-all-btn">View All</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EmbroideryDesigns;
