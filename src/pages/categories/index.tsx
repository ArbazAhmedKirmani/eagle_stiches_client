import Banner from "@/components/Banner";
import CategorySidebar from "@/components/CategorySidebar";
import CategoryTopFilters from "@/components/CategoryTopFilters";
import EmbroideryDesigns from "@/components/screens/home/EmbroideryDesigns";
import ShopByCategory from "@/components/screens/home/ShopByCategory";
import { Col, Container, Row } from "react-bootstrap";

export default function Category() {
  return (
    <>
      <main className={`main-content-sec`}>
        <Banner />
        <Container>
          <Row>
            <Col xs lg="3">
              <CategorySidebar priceslider={false} />
            </Col>
            <Col xs lg="9">
              <CategoryTopFilters sorting={false} />
              <ShopByCategory container={false} heading={false} />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}