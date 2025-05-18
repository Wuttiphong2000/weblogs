import "./Blogs.css";
import blogs from "../../Data/Blogs.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);
  const [debounced, setDebounced] = useState("");

  useDebounce(
    () => {
      setDebounced(search);
    },
    500,
    [search]
  );

  useEffect(() => {
    const result = blogs.filter((item) => item.title.includes(debounced));
    setFilterBlog(result);
  }, [debounced]);
  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาข้อมูลบทความ"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article>
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
};

export default Blogs;
