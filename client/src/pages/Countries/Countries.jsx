import { Logo } from "../../components/Logo/Logo";
import { Searcher } from "../../components/Searcher/Searcher";
import { CountryList } from "../../components/CountryList/CountryList";

export function Countries() {
  return (
    <div>
      <Logo />
      <Searcher />
      <CountryList />
      {/* Pagination Component */}
    </div>
  );
}
