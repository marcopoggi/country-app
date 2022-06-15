export function CountryDetail({ info }) {
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
    </>
  );
}
