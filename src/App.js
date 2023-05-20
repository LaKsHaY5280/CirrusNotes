import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/notesState";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar />
          <Alert />
          <Routes>
            <Route exact path="/" key="general" element={<Home />} />
            <Route exact path="/CirrusNotes" key="general" element={<Home />} />
            <Route exact path="/home" key="general" element={<Home />} />
            <Route exact path="/about" key="general" element={<About />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
