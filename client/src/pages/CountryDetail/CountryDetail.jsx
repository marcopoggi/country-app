import { useParams } from "react-router-dom";

export function CountryDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle {id}</h1>
    </div>
  );
}
