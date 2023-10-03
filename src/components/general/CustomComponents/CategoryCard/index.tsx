import { memo } from "react";
import { Button, Col } from "react-bootstrap";
import { CategoryDataProps } from "@/utils/interface/screens/categoryData.interface";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  data?: Array<CategoryDataProps>;
  customClassName?: string;
}

const CategoryCard = (props: CategoryCardProps) => {
  const { data }: CategoryCardProps = props;

  return (
    <>
      {data?.map((items, index) => (
        <Col
          key={index}
          xl={3}
          lg={3}
          md={3}
          sm={24}
          xs={24}
          className="category-card-sec"
        >
          <Link href={"#"}>
            <div
              key={items.id}
              className={`category-card ${
                items.customClassName && items.customClassName
              }`}
            >
              <div className="category-card-image">
                <Image
                  className="cat-img"
                  alt="Category Image"
                  src={items.catImage}
                  placeholder="blur"
                  blurDataURL="data:..."
                />
              </div>
              <div className="category-content-sec">
                <div className="cat-title">
                  <h5>{items.title}</h5>
                </div>
                <div className="divider"></div>
                <div className="cat-count">
                  {items.count && <span>{items.count} items</span>}
                </div>
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </>
  );
};
export default memo(CategoryCard);
