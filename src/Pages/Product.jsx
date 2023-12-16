import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });

  return (
    <div>
      Product
      <button onClick={() => navigate("/product/create")}>Add Product</button>
      <Link to={"/product/details/5"}>
        <button>Navigate to Product Detail - 5</button>
      </Link>
      {goToProduct && <Navigate to="/product/details/3"></Navigate>}
      <button onClick={() => setGoToProduct({ goToProduct: true })}>
        Navigate to Product -3 (UseState)
      </button>
    </div>
  );
}
