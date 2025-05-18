import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-header">
        <h3>Blog Application</h3>
      </Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`link ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          หน้าแรก
        </Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>
          บทความทั้งหมด
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          เกี่ยวกับเรา
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
