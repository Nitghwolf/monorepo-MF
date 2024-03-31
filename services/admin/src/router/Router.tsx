import { App } from "@/components/App";
import { LazyAbout } from "@/pages/About/About.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routers = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin/about",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routers);
export default routers;
