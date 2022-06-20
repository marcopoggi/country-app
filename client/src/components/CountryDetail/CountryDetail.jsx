import { useNavigate } from "react-router-dom";
import { CountryActivities } from "../CountryActivities/CountryActivities";
//styles
import {
  container_detail,
  detail_data_container,
  detail_data,
  detail_flag,
  detail_data_title_about,
  detail_data_title_activities,
  container_activities,
  activities_cards,
} from "./CountryDetail.module.css";

export function CountryDetail({ info, parameter }) {
  const navigate = useNavigate();

  return (
    <div className={container_detail}>
      <div className={detail_data_container}>
        <h2 className={detail_data_title_about}>About</h2>
        <div className={detail_data}>
          <h3>flag</h3>
          <div className={detail_flag}>
            <img src={info.flag_image} alt={`flag ${info.name}`} />
          </div>
        </div>
        {Object.keys(info).map((key) => {
          if (key === "activities" || key === "flag_image") return null;
          return (
            <div key={`${info[key]}-${info.id}`} className={detail_data}>
              <h3>{key === "id" ? "code" : key}</h3>
              {key !== "area" ? (
                <span>
                  {key === "id" ? info[key].toUpperCase() : info[key]}
                </span>
              ) : (
                <span>
                  {info[key]} km<sup>2</sup>
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className={container_activities}>
        <h2 className={detail_data_title_activities}>Activities</h2>
        <div className={activities_cards}>
          <CountryActivities activities={info.activities} />
        </div>
        <button onClick={() => navigate("/activities")}>Add Activity</button>
      </div>
    </div>
  );
}
