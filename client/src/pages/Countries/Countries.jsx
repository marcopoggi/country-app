import { Logo } from "../../components/Logo/Logo";
import { Searcher } from "../../components/Searcher/Searcher";
import { CountryList } from "../../components/CountryList/CountryList";
import { Preferences } from "../../components/Preferences/Preferences";
import { useState } from "react";
//styles
import {
  open_prefs,
  close_prefs,
  container,
  countries_container,
} from "./Countries.module.css";

export function Countries() {
  const [preferences, setPreferences] = useState(false);

  const togglePreferences = () => setPreferences(!preferences);

  return (
    <div className={container}>
      <div className={countries_container}>
        <Logo />
        <Searcher handlePreferences={togglePreferences} />
        <div className={preferences ? open_prefs : close_prefs}>
          <Preferences handlePreferences={togglePreferences} />
        </div>
        <CountryList />
      </div>
    </div>
  );
}
