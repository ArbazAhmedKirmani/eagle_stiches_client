import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import CategoryCard from "@/components/general/CustomComponents/CategoryCard";
import { CategoryCardData } from "@/utils/constants/data/category.data";
import CustomPrimaryHeading from "@/components/general/UiComponents/CustomPrimaryHeading/CustomPrimaryHeading";

// Define a prop interface
interface ShopByCategoryProps {
  container: boolean; // You can adjust the type based on your needs
  heading: boolean; // New prop for heading
}

const ShopByCategory: React.FC<ShopByCategoryProps> = ({
  container,
  heading,
}) => {
  return (
    <div className={"cat-sec"}>
      <div className="cat-row">
        {container ? (
          <Container>
            {heading ? (
              <CustomPrimaryHeading headingTag="h1" className="sec-heding">
                SHOP BY CATEGORY
              </CustomPrimaryHeading>
            ) : (
              ""
            )}
            <Row>
              <CategoryCard data={CategoryCardData} />
            </Row>
          </Container>
        ) : (
          <>
            {heading ? (
              <CustomPrimaryHeading headingTag="h1" className="sec-heding">
                SHOP BY CATEGORY
              </CustomPrimaryHeading>
            ) : (
              ""
            )}
            <Row>
              <CategoryCard
                mdColProps={4}
                lgColProps={4}
                xlColProps={4}
                data={CategoryCardData}
              />
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
