import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCountriesByFilters,
  setCountriesByOrder,
} from "../../redux/actions/countries";
import { PreferenceSection } from "../PreferenceSection/PreferenceSection";
import { CONTINENTS, ORDERS, ACTIVITIES } from "../../config/countries";

export function Preferences() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ continent: [], activities: [] });
  const [order, setOrder] = useState({ sortBy: "", descendent: false });
  const [newPreferences, setNewPreferences] = useState(false);

  //filter preferences [continent,activities]
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
    const { name, value, checked } = e.target;
    if (name === "descendent") {
      setOrder({ ...order, [name]: checked });
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

  //reset filters
  useEffect(function () {
    setFilters({ continent: [], activities: [] });
    setOrder({ sortBy: "", descendent: false });
    dispatch(setCountriesByFilters(filters));
    dispatch(setCountriesByOrder(order));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form onSubmit={applyPreferences}>
        <h2>Preferences</h2>
        <PreferenceSection
          data={CONTINENTS}
          handler={handleFilters}
          name="continent"
          title="Continent"
        />
        <PreferenceSection
          data={ACTIVITIES}
          handler={handleFilters}
          name="activities"
          title="Activities"
        />
        <PreferenceSection
          data={ORDERS}
          handler={handleOrder}
          name="sortBy"
          title="Sort by"
          type="radio"
          defaultValue={true}
        />
        <div>
          <input type="checkbox" name="descendent" onClick={handleOrder} />
          <label htmlFor="descendent">Descendent</label>
        </div>
        <button disabled={!newPreferences}>Apply</button>
      </form>
    </div>
  );
}
