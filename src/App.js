import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" key="general" element={<Home />} />
          <Route exact path="/CirrusNotes" key="general" element={<Home />} />
          <Route exact path="/home" key="general" element={<Home />} />
          <Route exact path="/about" key="general" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
