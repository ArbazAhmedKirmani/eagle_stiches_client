import Container from "react-bootstrap/Container";

import { Row, Col, Button } from "react-bootstrap";
import CategoryCard from "@/components/general/CustomComponents/CategoryCard";
import { CategoryCardData } from "@/utils/constants/data/category.data";
import CustomPrimaryHeading from "@/components/general/UiComponents/CustomPrimaryHeading/CustomPrimaryHeading";

const ShopByCategory = () => {
  return (
    <div className={"cat-sec"}>
      <div className="cat-row">
        <Container>
          <CustomPrimaryHeading headingTag="h1" className="sec-heding">
            SHOP BY CATEGORY
          </CustomPrimaryHeading>
          <Row>
            <CategoryCard data={CategoryCardData} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ShopByCategory;
