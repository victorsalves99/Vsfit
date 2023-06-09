import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import Imc from "./components/pages/Imc/Imc";
import Tmb from "./components/pages/Tmb/Tmb";
import AguaPorLitro from "./components/pages/AguaPorLitro/AguaPorLitro";

// const rotas = createBrowserRouter([
//   {
//     path:"/",
//     element: <Home/>
//   },
//   {
//     path:"/imc",
//     element: <Imc/>
//   }
// ])
const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/imc",
        element: <Imc/>,

      },
      {
        path:"/tmb",
        element: <Tmb/>,

      },
      {
        path:"/qda",
        element: <AguaPorLitro />,

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);
