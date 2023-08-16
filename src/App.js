import { Outlet } from "react-router-dom";
import Nav from "../src/components/Navbar/Nav";
import Services from "../src/components/services/Services";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Services />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
