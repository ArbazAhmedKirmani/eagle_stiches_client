import { memo } from "react";
import { Button, Col } from "react-bootstrap";
import { CategoryDataProps } from "@/utils/interface/screens/categoryData.interface";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  data?: Array<CategoryDataProps>;
  customClassName?: string;
  xlColProps?: number;
  lgColProps?: number;
  mdColProps?: number;
  smColProps?: number;
  xsColProps?: number;
}

const CategoryCard = (props: CategoryCardProps) => {
  const {
    data,
    xsColProps,
    smColProps,
    mdColProps,
    lgColProps,
    xlColProps,
  }: CategoryCardProps = props;

  return (
    <>
      {data?.map((items, index) => (
        <Col
          key={index}
          xl={xlColProps ? xlColProps : 3}
          lg={lgColProps ? lgColProps : 3}
          md={mdColProps ? mdColProps : 3}
          sm={smColProps ? smColProps : 24}
          xs={xsColProps ? xsColProps : 24}
          className="category-card-sec"
        >
          <Link href={"/categories"}>
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
