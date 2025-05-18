import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo-header">
        <h3>Blog Application</h3>
      </Link>
      <div className="link">
        <Link to="/">หน้าแรก</Link>
        <Link to="/blog">บทความทั้งหมด</Link>
        <Link to="/about">เกี่ยวกับเรา</Link>
      </div>
    </nav>
  );
};

export default Navbar;
