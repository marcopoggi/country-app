import { Link } from "react-router-dom";

export function CountryCard({
  continent,
  flag_image,
  name,
  population,
  activities,
}) {
  return (
    <Link
      style={{ background: "grey", margin: "10px", width: "200px", textDecoration:"none", color:"#000"}}
      to={name}
    >
      <img src={flag_image} alt={`${name}-flag`} style={{ width: "100px" }} />
      <h2>{name}</h2>
      <h3>{continent}</h3>
    </Link>
  );
}
