import react from "react";
import Home from "./components/home.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header.component";
import Contact from "./components/contact.component";

function App() {
  return (
    
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
