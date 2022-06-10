import {
  background,
  container,
  presentation,
  subtitle,
  button,
  decoration,
} from "./Landing.module.css";
import worldIcon from "../../assets/img/world.png";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("countries");
  };

  return (
    <div className={background}>
      <div className={container}>
        <div className={presentation}>
          <Logo titleSize="3em" iconSize="1.05em"></Logo>
          <h3 className={subtitle}>Discover the World.</h3>
        </div>
        <button className={button} onClick={() => handleClick()}>
          Explore
        </button>
        <div className={decoration}>
          <img src={worldIcon} alt="airplane-world-icon" />
        </div>
      </div>
    </div>
  );
}
