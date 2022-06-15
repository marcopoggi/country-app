import { CountryCard } from "../CountryCard/CountryCard";

export function CountryCards({ countries, page }) {
  const from = page * 10 - 10;
  const to = page * 10;
  return (
    <div style={{ display: "flex" }}>
      {countries.slice(from, to).map((country) => (
        <CountryCard {...country} key={country.name} />
      ))}
    </div>
  );
}
