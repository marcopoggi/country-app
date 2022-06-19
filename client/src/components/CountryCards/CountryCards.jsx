import { CountryCard } from "../CountryCard/CountryCard";
//styles
import { container_cards } from "./CountryCards.module.css";

export function CountryCards({ countries, page }) {
  const from = page * 10 - 10;
  const to = page * 10;
  return (
    <div className={container_cards}>
      {countries.slice(from, to).map((country) => (
        <CountryCard {...country} key={country.name} />
      ))}
    </div>
  );
}
