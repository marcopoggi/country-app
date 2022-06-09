import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import worldIcon from "../../assets/img/world.png";

const {
  background,
  container,
  presentation,
  title,
  icon,
  subtitle,
  button,
  decoration,
} = styles;

export function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("countries");
  };

  return (
    <div className={background}>
      <div className={container}>
        <div className={presentation}>
          <h1 className={title}>
            C<span className={icon}>🌍</span>untry App
          </h1>
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
