import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Decoration from "./components/Decoration/Decoration";
import { Invitation } from "./components/Invitation/Invitation";
import Professional from "./components/Event-professinals/Professional";
import HotelDestination from "./components/Hotels-destination/HotelDestination";
import Menu from "./components/Catering/Menu";
import Transportation from "./components/Transportation/Transportation";
import Venue from "./components/Venue/Venue";
import Login from "./pages/Login/Login";

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
        path: "/catering",
        element: <Menu endpoint={"/catering"} />,
      },
      {
        path: "/stay",
        element: <HotelDestination endpoint={"/destination"} />,
      },
      {
        path: "/transportation",
        element: <Transportation endpoint={"/transportation"} />,
      },
      {
        path: "/venues",
        element: <Venue endpoint={"/destination"} />,
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
  { path: "/login", element: <Login /> },
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
