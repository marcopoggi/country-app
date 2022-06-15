import { Logo } from "../../components/Logo/Logo";
import { Searcher } from "../../components/Searcher/Searcher";
import { CountryList } from "../../components/CountryList/CountryList";
import { Preferences } from "../../components/Preferences/Preferences";

export function Countries() {
  return (
    <div>
      <Logo />
      <Searcher />
      <Preferences />
      <CountryList />
    </div>
  );
}
