import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Body from "./Component/Body";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
