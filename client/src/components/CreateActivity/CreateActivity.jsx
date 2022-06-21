import { useEffect, useState } from "react";
import { InfoSign } from "../InfoSign/InfoSign";
import { useDispatch } from "react-redux";
//actions
import { setCountries } from "../../redux/actions/countries";
//handlers
import {
  nameValidator,
  numberValidator,
  seasonValidator,
  countriesValidator,
  allValidate,
} from "../../handlers/activities";
//cfg
import {
  SEASONS,
  INITIAL_FORM,
  INITIAL_FORM_ERRORS,
} from "../../config/countries";
//serv
import { setActivity } from "../../services/countries";
//styles
import {
  form_container,
  form_success,
  form_countries_show,
  form_countries_hidden,
  country_option,
  form_field,
} from "./CreateActivity.module.css";
import location_icon from "../../assets/img/location_countries.png";
import ok_icon from "../../assets/img/ok_icon.png";

export function CreateActivity({ countries }) {
  const disptach = useDispatch();
  const [success, setSuccess] = useState({ state: false, msg: "" });
  const [showCountries, setShowCountries] = useState(false);
  const [valid, setValid] = useState(false);
  const [errors, setErrors] = useState(INITIAL_FORM_ERRORS);
  const [form, setForm] = useState(INITIAL_FORM);

  const toogleShowCountries = () => setShowCountries(!showCountries);

  const handleField = (e) => {
    const { name, value, checked } = e.target;
    const errorsCopy = errors; //copy;
    let data = null;
    switch (name) {
      case "name":
        data = nameValidator(value);
        errorsCopy[name] = !data.valid ? data.value : "";
        break;
      case "duration":
        data = numberValidator(value, 0, 480, "Invalid Duration", "Duration");
        errorsCopy[name] = !data.valid ? data.value : "";
        break;
      case "difficulty":
        data = numberValidator(value, 1, 5, "Invalid Difficulty", "Difficulty");
        errorsCopy[name] = !data.valid ? data.value : "";
        break;
      case "season":
        data = seasonValidator(value, SEASONS);
        errorsCopy[name] = !data.valid ? data.value : "";
        break;
      case "selectedCountries":
        data = countriesValidator(
          value,
          checked,
          form.selectedCountries,
          countries
        );
        errorsCopy[name] = !data.valid ? data.msg : "";
        break;
      default:
        break;
    }
    let newFormState = {
      ...form,
      [name]: data?.valid ? data.value : form[name],
    };
    setForm(newFormState);
    setErrors(errorsCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      setActivity(form).then(({ response }) => {
        const { created, message, error } = response;
        setSuccess({
          state: true,
          msg: error
            ? error
            : created
            ? message
            : "Activity exists, updated countries",
        });
        if (created) disptach(setCountries());
      });
      setForm(INITIAL_FORM);
      setErrors(INITIAL_FORM_ERRORS);
    }
  };

  useEffect(
    function () {
      const noErrors = Object.keys(errors).every(
        (field) => errors[field] === ""
      );
      if (noErrors && allValidate(form)) setValid(true);
      else setValid(false);
    },
    [errors, form]
  );

  return !success.state ? (
    <form onSubmit={handleSubmit} className={form_container}>
      <div className={form_field}>
        <input
          type="text"
          name="name"
          onChange={handleField}
          placeholder="✏️ Name"
        />
        {!errors.name ? null : <span>{errors.name}</span>}
      </div>
      <div className={form_field}>
        <input
          type="text"
          name="duration"
          onChange={handleField}
          placeholder="⏲️ Duration (minutes)"
        />
        {!errors.duration ? null : <span>{errors.duration}</span>}
      </div>
      <div className={form_field}>
        <input
          type="text"
          name="difficulty"
          onChange={handleField}
          placeholder="📈 Difficulty (1-5)"
        />
        {!errors.difficulty ? null : <span>{errors.difficulty}</span>}
      </div>
      <div className={form_field}>
        <label htmlFor="season">Season ❄️</label>
        <select name="season" onChange={handleField}>
          {SEASONS.map((season) => (
            <option value={season} key={season}>
              {season}
            </option>
          ))}
        </select>
        {!errors.season ? null : <span>{errors.season}</span>}
      </div>
      <div className={form_field}>
        <label htmlFor="countries">Select Countries</label>
        <button onClick={toogleShowCountries} type="button">
          <img src={location_icon} alt="📍" />
        </button>
        {!errors.selectedCountries ? null : (
          <span>{errors.selectedCountries}</span>
        )}
      </div>
      <div
        className={showCountries ? form_countries_show : form_countries_hidden}
      >
        {countries.map(({ name }) => (
          <div key={name} className={country_option}>
            <input
              type="checkbox"
              name="selectedCountries"
              id={name}
              value={name}
              onClick={handleField}
            />
            <label htmlFor={name}>{name}</label>
          </div>
        ))}
      </div>
      <input
        type="submit"
        value="Create Activity"
        disabled={valid ? false : true}
      />
    </form>
  ) : (
    <div className={form_success}>
      <InfoSign title={success.msg} img={ok_icon} />
      <button onClick={() => setSuccess({ state: false, msg: "" })}>
        Create More
      </button>
    </div>
  );
}
