import { InfoSign } from "../../components/InfoSign/InfoSign";
import { Loader } from "../../components/Loader/Loader";
import { CountryDetail } from "../../components/CountryDetail/CountryDetail";
import { useDetail } from "../../hooks/useDetail";
import { Logo } from "../../components/Logo/Logo";

export function Detail() {
  const { countryDetail, error, loading } = useDetail();

  return (
    <div>
      <Logo />
      {error.state ? (
        <InfoSign />
      ) : loading ? (
        <Loader />
      ) : (
        <CountryDetail info={countryDetail} />
      )}
    </div>
  );
}
