import { Outlet } from "react-router-dom";
import "./App.sass";
import Footer from "./components/common/footer/Footer";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Home from "./pages/Home/Home";



function App() {
  return (
    <>
    <div className="App">
      <Sidebar />
      <div className="view">
        <Outlet />
        <Footer />
      </div>
    </div>

    </>
  );
}

export default App;