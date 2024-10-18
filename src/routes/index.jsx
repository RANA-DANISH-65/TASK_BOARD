import Layout from "../layout/layout";
import Boards from "../pages/Boards/index";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: "",
            element: <Boards />,
          },
        ],
      },
    ],
  },
];

export default routes;
