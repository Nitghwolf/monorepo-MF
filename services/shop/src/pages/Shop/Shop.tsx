import React from "react";
import { Link } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";

const Shop: React.FC = () => {
  return (
    <>
      <h1>Shop</h1>
      <div>
        <Link to={shopRoutes.cart}>Cart</Link>
      </div>
    </>
  );
};

export default Shop;
