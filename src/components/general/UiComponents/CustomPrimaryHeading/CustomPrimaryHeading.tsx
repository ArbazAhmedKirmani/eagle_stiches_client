import React, { memo, ReactNode } from "react";

interface CustomHeadingProps {
  className?: string;
  children?: ReactNode;
  headingTag?: string;
}

const CustomPrimaryHeading: React.FC<CustomHeadingProps> = (props) => {
  const { className = "" } = props;
  let headingClass = "";

  return (
    <span className="custom-heading-primary">
      {props.headingTag === "h1" ? (
        <h1 {...props} className={`${headingClass} ${className}`}>
          {props.children}
        </h1>
      ) : (
        <h2 {...props} className={`${headingClass} ${className}`}>
          {props.children}
        </h2>
      )}
    </span>
  );
};

export default memo(CustomPrimaryHeading);
