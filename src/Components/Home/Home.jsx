import "./Home.css"
import home from "../../assets/images/home.svg"

const Home = () => {
  return (
    <div className="container">
      <h2 className="title">หน้าแรกของเว็บไซต์</h2>
      <img src={home} alt="home" />
    </div>
  )
}

export default Home