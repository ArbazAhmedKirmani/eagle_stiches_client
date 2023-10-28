import Container from "react-bootstrap/Container";

import { Button, Col, Row } from "react-bootstrap";
import ProductCard from "@/components/general/CustomComponents/ProductCard";
import { ProductCardData } from "@/utils/constants/data/product.data";
import CustomPrimaryHeading from "@/components/general/UiComponents/CustomPrimaryHeading/CustomPrimaryHeading";

// Define a prop interface
interface EmbroideryDesignsProps {
  container: boolean; // You can adjust the type based on your needs
  heading: boolean; // New prop for heading
}

const EmbroideryDesigns: React.FC<EmbroideryDesignsProps> = ({
  container,
  heading,
}) => {
  return (
    <div className={"prod-sec"}>
      <div className="prod-row">
        {container ? (
          <Container>
            {heading ? (
              <CustomPrimaryHeading headingTag="h1" className="sec-heding">
                EMBROIDERY DESIGNS
              </CustomPrimaryHeading>
            ) : (
              ""
            )}
            <Row>
              <ProductCard data={ProductCardData} />
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="view-all-btn-sec">
                  <Button className="view-all-btn">View All</Button>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <>
            {heading ? (
              <CustomPrimaryHeading headingTag="h1" className="sec-heding">
                EMBROIDERY DESIGNS
              </CustomPrimaryHeading>
            ) : (
              ""
            )}
            <Row>
              <ProductCard
                mdColProps={4}
                lgColProps={4}
                xlColProps={4}
                data={ProductCardData}
              />
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="view-all-btn-sec">
                  <Button className="view-all-btn">View All</Button>
                </div>
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default EmbroideryDesigns;
