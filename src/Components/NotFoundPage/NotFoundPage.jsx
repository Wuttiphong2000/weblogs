import "./NotFoundPage.css";
import notfound from "../../assets/images/notfound.svg";

const NotFoundPage = () => {
  return (
    <div className="container">
      <h2 className="title">ไม่พบหน้าเว็บ! (404 Page Not Found) </h2>
      <img src={notfound} alt="notfound" />
    </div>
  );
};

export default NotFoundPage;
