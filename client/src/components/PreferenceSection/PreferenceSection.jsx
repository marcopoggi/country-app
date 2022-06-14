export function PreferenceSection({
  data,
  name,
  title,
  handler,
  type = "checkbox",
  defaultValue = false,
}) {
  return (
    <div>
      <h4>{title}</h4>
      {data.map((val, index) => (
        <div key={val}>
          {
            //if you want to set a default value, select the first one.
            defaultValue && index === 0 ? (
              <input
                type={type}
                name={name}
                value={val}
                onClick={handler}
                defaultChecked
              />
            ) : (
              <input type={type} name={name} value={val} onClick={handler} />
            )
          }

          <label htmlFor={name}>{val}</label>
        </div>
      ))}
    </div>
  );
}
