import { useEffect, useState } from "react";
import { useActivities } from "../../hooks/useActivities";
import { useDispatch } from "react-redux";
import {
  setCountriesByFilters,
  setCountriesByOrder,
} from "../../redux/actions/countries";
import { PreferenceSection } from "../PreferenceSection/PreferenceSection";
import { CONTINENTS, ORDERS } from "../../config/countries";
//styles
import {
  preferences_container,
  preferences_back_btn,
  preferences_header,
  preferences_settings,
  preferences_settings_apply,
} from "./Preferences.module.css";
import back_btn from "../../assets/img/back_btn.png";
import continent_img from "../../assets/img/continent.png";
import activities_img from "../../assets/img/activities.png";
import sort_img from "../../assets/img/sort.png";

export function Preferences({ handlePreferences }) {
  const dispatch = useDispatch();
  const { ACTIVITIES } = useActivities();
  const [filters, setFilters] = useState({ continent: [], activities: [] });
  const [order, setOrder] = useState({ sortBy: "", descendent: false });
  const [newPreferences, setNewPreferences] = useState(false);

  //filter preferences [continent,activities
  const handleFilters = (e) => {
    const { name, value, checked } = e.target;
    if (checked) setFilters({ ...filters, [name]: [...filters[name], value] });
    else {
      const deleteFromFilters = filters[name].filter((v) => v !== value);
      setFilters({ ...filters, [name]: [...deleteFromFilters] });
    }
    setNewPreferences(true);
  };

  //order preferences [name,population,ascendant]
  const handleOrder = (e) => {
    const { name, value } = e.target;
    if (name === "descendent") {
      setOrder({ ...order, descendent: !order.descendent });
    } else setOrder({ ...order, [name]: value });

    setNewPreferences(true);
  };

  //apply preferences & dispatch actions
  const applyPreferences = (e) => {
    e.preventDefault();
    //dispatch actions
    if (newPreferences) {
      dispatch(setCountriesByFilters(filters));
      dispatch(setCountriesByOrder(order));
      setNewPreferences(false);
    }
  };

  const clearPreferences = () => {
    setFilters({ continent: [], activities: [] });
    setOrder({ sortBy: "", descendent: false });
  };

  //reset filters
  useEffect(function () {
    clearPreferences();
    dispatch(setCountriesByFilters(filters));
    dispatch(setCountriesByOrder(order));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={preferences_container}>
      <div className={preferences_header}>
        <button onClick={handlePreferences} className={preferences_back_btn}>
          <img src={back_btn} alt="Back" />
        </button>
        <h2>Preferences</h2>
      </div>
      <form onSubmit={applyPreferences} className={preferences_settings}>
        <PreferenceSection
          data={CONTINENTS}
          handler={handleFilters}
          name="continent"
          title="Continent"
          icon={continent_img}
        />
        <PreferenceSection
          data={Array.from(ACTIVITIES)}
          handler={handleFilters}
          name="activities"
          title="Activities"
          icon={activities_img}
        />
        <PreferenceSection
          data={ORDERS}
          handler={handleOrder}
          name="sortBy"
          title="Sort by"
          type="radio"
          isDescendent={order.descendent}
          defaultValue={true}
          icon={sort_img}
        />
        <div className={preferences_settings_apply}>
          <button disabled={!newPreferences} onClick={handlePreferences}>
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
