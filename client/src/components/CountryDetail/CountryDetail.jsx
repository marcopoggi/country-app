import { useNavigate } from "react-router-dom";
import { CountryActivities } from "../CountryActivities/CountryActivities";
export function CountryDetail({ info }) {
  const navigate = useNavigate();

  return (
    <>
      <h1>{info.name}</h1>
      <h2>Code:{info.id}</h2>
      <h2>Capital:{info.capital}</h2>
      <h2>Continent:{info.continent}</h2>
      <h2>Subregion:{info.subregion}</h2>
      <h2>
        Area:{info.area}km<sup>2</sup>
      </h2>
      <h2>Population:{info.population}</h2>
      <hr />
      <h2>Activities</h2>
      <CountryActivities activities={info.activities} />
      <button onClick={() => navigate("/activities")}>Create Activity</button>
    </>
  );
}
