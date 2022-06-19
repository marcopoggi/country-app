//styles
import { container_infosign } from "./InfoSign.module.css";
import error_default from "../../assets/img/error-icon.png";

export function InfoSign({
  message = "",
  title = "Something has wrong",
  img = error_default,
}) {
  return (
    <div className={container_infosign}>
      <img src={img} alt="⚠️" />
      <h3>{title}</h3>
      <h4>{message}</h4>
    </div>
  );
}
