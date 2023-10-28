import { memo } from "react";
import { Button, Col } from "react-bootstrap";
import Image from "next/image";
import { ProductDataProps } from "@/utils/interface/screens/productData.interface";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faInbox,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";

interface ProductCardProps {
  data?: Array<ProductDataProps>;
  customClassName?: string;
  xlColProps?: number;
  lgColProps?: number;
  mdColProps?: number;
  smColProps?: number;
  xsColProps?: number;
}

const ProductCard = (props: ProductCardProps) => {
  const {
    data,
    xsColProps,
    smColProps,
    mdColProps,
    lgColProps,
    xlColProps,
  }: ProductCardProps = props;

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
          className="product-card-sec"
        >
          <div
            key={items.id}
            className={`product-card ${
              items.customClassName && items.customClassName
            }`}
          >
            <div className="product-card-image">
              <Image
                height={250}
                className="product-img"
                alt="Product Image"
                src={items.productImage}
                placeholder="blur"
                blurDataURL="data:..."
              />
              <div className="quick-view">QUICK VIEW</div>
            </div>
            <div className="procuct-content-sec">
              <div className="divider"></div>

              <div className="prod-title">
                <h5>
                  <Link href={"#"}>{items.title}</Link>
                </h5>
              </div>
              <div className="prod-price">
                <span>{items.price}</span>
              </div>
              <div className="prod-action">
                {items.addToCart && (
                  <Link href={items.addToCart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
                )}
                {items.productLink && (
                  <Link href={items.productLink}>
                    <FontAwesomeIcon icon={faRectangleList} />
                  </Link>
                )}
                {items.selectOption && (
                  <Link href={items.selectOption}>
                    <FontAwesomeIcon icon={faInbox} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};
export default memo(ProductCard);
