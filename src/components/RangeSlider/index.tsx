import React, { useState } from "react";
import { Form } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

const PriceSlider = () => {
  const [value, setValue] = useState(50);

  return (
    <>
      <Form className="priceslider mt-5">
        <Form.Group>
          <Form.Label className="mb-3">Price123</Form.Label>
          <RangeSlider
            value={value}
            min={0}
            max={5000}
            onChange={(e: any) => setValue(parseFloat(e.target.value))}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default PriceSlider;
