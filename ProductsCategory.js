import React from "react";
import "./ProductsCategory.css";

const ProductsCategory = (props) => {
  return (
    <>
      <div className="centerDiv">
        <div className="productCtr">
          <img src={props.imgsrc} alt="Apple_img" width="50" />

          <div className="productCtr_ctn">
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCategory;
