//styles
import { words, earth } from "./Logo.module.css";

export function Logo() {
  return (
    <h1 className={words}>
      C<span className={earth}>🌍</span>untry App
    </h1>
  );
}
