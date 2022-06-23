import { Link } from "react-router-dom";
import { InfoSign } from "../../components/InfoSign/InfoSign";
//styles
import { container, btn_link } from "./NotFound.module.css";
import lost_icon from "../../assets/img/earth-lost.png";
import home_icon from "../../assets/img/home.png";

export function NotFound() {
  return (
    <div className={container}>
      <InfoSign title="Looks like you got lost" img={lost_icon} />
      <Link to="/" className={btn_link}>
        <img src={home_icon} alt="Home" />
        <h3>Back Home</h3>
      </Link>
    </div>
  );
}
