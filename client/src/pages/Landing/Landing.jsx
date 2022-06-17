import worldIcon from "../../assets/img/world.png";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";
//styles
import {
  container,
  decoration,
  welcome_words,
  welcome_btn,
} from "./Landing.module.css";

export function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("countries");
  };

  return (
    <div className={container}>
      <div className={welcome_words}>
        <Logo></Logo>
        <h3>Discover the World</h3>
        <button className={welcome_btn} onClick={() => handleClick()}>
          Explore
        </button>
      </div>

      <div className={decoration}>
        <img src={worldIcon} alt="airplane-world-icon" />
      </div>
    </div>
  );
}
