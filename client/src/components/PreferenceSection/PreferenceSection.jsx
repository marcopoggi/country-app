import { useNavigate } from "react-router-dom";

//styles
import {
  preference_section_container,
  preference_section_inputs,
  preference_header,
  descendent_btn,
  descendent_btn_true,
  descendent_btn_false,
  section_no_data,
} from "./PreferenceSection.module.css";
import add_icon from "../../assets/img/add-icon.png";

export function PreferenceSection({
  icon,
  data,
  name,
  title,
  handler,
  type = "checkbox",
  defaultValue = false,
  isDescendent,
}) {
  const navigate = useNavigate();
  return (
    <div className={preference_section_container}>
      <div className={preference_header}>
        <h3>{title}</h3>
        {name !== "sortBy" ? (
          <img src={icon} alt="section-img" />
        ) : (
          <>
            <button
              type="button"
              name="descendent"
              onClick={handler}
              className={
                isDescendent
                  ? `${descendent_btn} ${descendent_btn_true}`
                  : `${descendent_btn} ${descendent_btn_false}`
              }
            >
              <img src={icon} alt="section-img" name="descendent" />
            </button>
          </>
        )}
      </div>

      {data.length > 0 ? (
        data.map((val, index) => (
          <div key={val} className={preference_section_inputs}>
            {
              //if you want to set a default value, select the first one.
              defaultValue && index === 0 ? (
                <input
                  type={type}
                  name={name}
                  value={val}
                  id={val}
                  onClick={handler}
                  defaultChecked
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  value={val}
                  id={val}
                  onClick={handler}
                />
              )
            }
            <label htmlFor={val}>{val}</label>
          </div>
        ))
      ) : (
        <div className={section_no_data}>
          <h3>No {title}</h3>
          {title === "Activities" ? (
            <button onClick={() => navigate("/activities")}>
              <img src={add_icon} alt="Create" />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
