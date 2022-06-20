import { InfoSign } from "../InfoSign/InfoSign";
import no_activities_icon from "../../assets/img/no-activities.png";
//styles
import { activity_card, activity_info } from "./CountryActivities.module.css";
import duration_icon from "../../assets/img/activities_time.png";
import season_icon from "../../assets/img/activities_season.png";
import difficulty_icon from "../../assets/img/activities_difficulty.png";

export function CountryActivities({ activities }) {
  return activities ? (
    activities.length === 0 ? (
      <div>
        <InfoSign title="No Activities" img={no_activities_icon} />
      </div>
    ) : (
      activities.map((act) => (
        <div key={act.id} className={activity_card}>
          <h3>{act.name}</h3>
          <div className={activity_info}>
            <img src={season_icon} alt="Season" title="season" />
            <span>{act.season}</span>
          </div>
          <div className={activity_info}>
            <img src={difficulty_icon} alt="Difficulty" title="difficulty" />
            <span>{act.difficulty}</span>
          </div>
          <div className={activity_info}>
            <img src={duration_icon} alt="Duration" title="duration" />
            <span>{act.duration}</span>
          </div>
        </div>
      ))
    )
  ) : null;
}
