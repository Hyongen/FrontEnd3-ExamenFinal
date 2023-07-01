import { Outlet, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
  );
}

export default App;