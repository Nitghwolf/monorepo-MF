import React from "react";
import { Outlet } from "react-router-dom";
import {deepMerge} from "@packages/shared/src/utils/deepMerge";

export const App: React.FC = () => {
  deepMerge();

  return (
    <div>
      <h1>ADMIN MODULE</h1>
      <Outlet />
    </div>
  );
};
