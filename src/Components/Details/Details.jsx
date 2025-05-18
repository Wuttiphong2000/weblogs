import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../../Data/Blogs.js";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h1 className="title">ชื่อบทความ : {title}</h1>
      <img src={image} alt={title} className="image-detail" />
      <div className="blog-detail">
        <strong>ชื่อผู้เขียน : {author}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Details;
