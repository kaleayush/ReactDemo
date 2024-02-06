import React from "react";
import { useParams } from "react-router-dom";
function Product() {
  const { ProductNo, ProductName, isActive } = useParams();
  console.log(ProductNo);
  console.log(ProductName);
  console.log(isActive);
  return (
    <>
      <h1 className="bg-gray-600 text-orange-200 text-center">
        <pre>
          ProductNo : {ProductNo}
          ProductName: {ProductName}
          isActive: {isActive}
        </pre>
      </h1>
    </>
  );
}

export default Product;
