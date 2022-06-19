import { Link } from "react-router-dom";
//styles
import { card, card_basic_info } from "./CountryCard.module.css";

export function CountryCard({
  continent,
  flag_image,
  name,
  population,
  activities,
}) {
  return (
    <Link
      to={name}
      style={{ backgroundImage: `url(${flag_image})` }}
      className={card}
    >
      <div className={card_basic_info}>
        <h2>{name}</h2>
        <h3>{continent}</h3>
        <h4>population: {population}</h4>
      </div>
    </Link>
  );
}
