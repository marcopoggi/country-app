import { InfoSign } from "../../components/InfoSign/InfoSign";
import { Loader } from "../../components/Loader/Loader";
import { CountryDetail } from "../../components/CountryDetail/CountryDetail";
import { useDetail } from "../../hooks/useDetail";
import { useNavigate } from "react-router-dom";
//styles
import {
  container_detail,
  container_background,
  container_detail_header,
} from "./Detail.module.css";
import back_btn from "../../assets/img/back_btn.png";
import unknown_country from "../../assets/img/country-no-existent.png";

export function Detail() {
  const navigate = useNavigate();
  const { countryDetail, error, loading, param } = useDetail();

  return (
    <div className={container_detail}>
      <div className={container_background}>
        <div className={container_detail_header}>
          <button className={back_btn} onClick={() => navigate(-1)}>
            <img src={back_btn} alt="Back" />
          </button>
          <h1 title={countryDetail.name}>
            {countryDetail.name || param.toLowerCase()}
          </h1>
        </div>
        {error.state ? (
          error.msg.startsWith(`[${param}]`) ? (
            <InfoSign
              title="nonexistent country"
              img={unknown_country}
              message={`It seems that the country "${param}" does not exist.`}
            />
          ) : (
            <InfoSign message={error.msg} />
          )
        ) : loading ? (
          <Loader />
        ) : (
          <CountryDetail info={countryDetail} parameter={param} />
        )}
      </div>
    </div>
  );
}
