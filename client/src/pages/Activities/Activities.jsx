import { useNavigate } from "react-router-dom";
import { CreateActivity } from "../../components/CreateActivity/CreateActivity";
import { useCountries } from "../../hooks/useCountries";
import { InfoSign } from "../../components/InfoSign/InfoSign";
import { Loader } from "../../components/Loader/Loader";

export function Activities() {
  const { error, countries, loading } = useCountries(true);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Create activity</h1>
      {error.state ? (
        <InfoSign />
      ) : loading ? (
        <Loader />
      ) : (
        <CreateActivity countries={countries} />
      )}
    </div>
  );
}
