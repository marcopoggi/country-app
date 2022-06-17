import landingLogo from "../../assets/img/landingIcon.png";
//styles
import { words, earth } from "./Logo.module.css";

export function Logo() {
  return (
    <h1 className={words}>
      C<img src={landingLogo} alt="airplane-world-icon" className={earth} />
      untry App
    </h1>
  );
}
