import { useEffect } from "react";
import { useState } from "react";
import { useCountries } from "./useCountries";

export function useActivities() {
  const [activities, setActivities] = useState(new Set());
  const { countries } = useCountries(true); //all

  useEffect(
    function () {
      for (let country of countries) {
        if (country.activities.length === 0) continue;
        country.activities.forEach((act) =>
          setActivities(activities.add(act.name))
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [countries]
  );

  return { ACTIVITIES: activities };
}
