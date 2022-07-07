import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
