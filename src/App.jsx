import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Details from "./Components/Details/Details";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/info" element={<Navigate to="/about" />} />
        <Route path="/blog/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
