//styles
import { loader_container, loader_spinner } from "./Loader.module.css";

export function Loader() {
  return (
    <div className={loader_container}>
      <div className={loader_spinner}></div>
      <h3>Loading</h3>
    </div>
  );
}
