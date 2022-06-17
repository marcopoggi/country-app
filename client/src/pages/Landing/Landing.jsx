import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";
//styles
import {
  container,
  welcome_words,
  welcome_container,
  welcome_words_btn,
} from "./Landing.module.css";

export function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("countries");
  };

  return (
    <div className={container}>
      <div className={welcome_container}>
        <div className={welcome_words}>
          <Logo></Logo>
          <h3>Discover the World</h3>
          <button className={welcome_words_btn} onClick={() => handleClick()}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
