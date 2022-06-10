import { title, icon } from "./Logo.module.css";

export function Logo({ titleSize, iconSize }) {
  return (
    <h1 className={title} style={{ fontSize: titleSize }}>
      C
      <span className={icon} style={{ fontSize: iconSize }}>
        🌍
      </span>
      untry App
    </h1>
  );
}
