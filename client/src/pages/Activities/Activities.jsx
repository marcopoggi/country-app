import { useNavigate } from "react-router-dom";
import { CreateActivity } from "../../components/CreateActivity/CreateActivity";
import { useCountries } from "../../hooks/useCountries";
import { InfoSign } from "../../components/InfoSign/InfoSign";
import { Loader } from "../../components/Loader/Loader";
//styles
import {
  container,
  container_header,
  container_bg,
} from "./Activities.module.css";
import back_icon from "../../assets/img/back_btn.png";

export function Activities() {
  const { error, countries, loading } = useCountries(true);
  const navigate = useNavigate();

  return (
    <div className={container}>
      <div className={container_bg}>
        <div className={container_header}>
          <button onClick={() => navigate(-1)}>
            <img src={back_icon} alt="Back" />
          </button>
          <h1>Create activity</h1>
        </div>
        {error.state ? (
          <InfoSign message="Impossible to create activities at this time"/>
        ) : loading ? (
          <Loader />
        ) : (
          <CreateActivity countries={countries} />
        )}
      </div>
    </div>
  );
}
