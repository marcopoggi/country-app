import worldIcon from "../../assets/img/world.png";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("countries");
  };

  return (
    <div>
      <div>
        <Logo></Logo>
        <h3>Discover the World.</h3>
      </div>
      <button onClick={() => handleClick()}>Explore</button>
      <div>
        <img src={worldIcon} alt="airplane-world-icon" />
      </div>
    </div>
  );
}
