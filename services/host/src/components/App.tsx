import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { adminRoutes } from "@packages/shared/src/routes/admin";

export const App: React.FC = () => {
  return (
    <div data-testId={"App"}>
      <h1>PAGE</h1>
      <Link to={adminRoutes.about}>ABOUT</Link>
      <br />
      <Link to={shopRoutes.main}>SHOP</Link>
      <Outlet />
    </div>
  );
};
