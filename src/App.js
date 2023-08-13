import { Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Nav from "../src/components/Navbar/Nav";
import Services from "../src/components/services/Services";

function App() {
  return (
    <>
      <Nav />
      <Services />
      <Outlet />
    </>
  );
}

export default App;
