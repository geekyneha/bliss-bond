import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Decoration from "./components/Decoration/Decoration";
import { Invitation } from "./components/Invitation/Invitation";
import Professional from "./components/Event-professinals/Professional";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/weddingDecoration",
        element: <Decoration endpoint={"/weddingDecoration"} />,
      },
      {
        path: "/haldiDecoration",
        element: <Decoration endpoint={"/haldiDecoration"} />,
      },
      {
        path: "/engagementDecoration",
        element: <Decoration endpoint={"/engagementDecoration"} />,
      },
      {
        path: "/invitation",
        element: <Invitation endpoint={"/invitation"} />,
      },
      {
        path: "/videoGrapher",
        element: <Professional endpoint={"/videoGrapher"} />,
      },
      {
        path: "/makeupArtist",
        element: <Professional endpoint={"/makeupArtist"} />,
      },
      {
        path: "/mehendiArtist",
        element: <Professional endpoint={"/mehendiArtist"} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
