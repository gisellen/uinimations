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
        <Home />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;