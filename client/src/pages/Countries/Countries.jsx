import { Logo } from "../../components/Logo/Logo";
import { Searcher } from "../../components/Searcher/Searcher";
import { container,navbar } from "./Countries.module.css";

export function Countries() {
  return (
    <div className={container}>
      <div className={navbar}>
        <Logo titleSize="2em" iconSize="1.05em"/>
        <Searcher />
        {/* Country List */}
        {/* Pagination Component */}
      </div>
    </div>
  );
}
