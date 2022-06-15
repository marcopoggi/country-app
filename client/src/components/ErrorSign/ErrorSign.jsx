export function ErrorSign({ message, title = "Something has wrong", img }) {
  return (
    <div>
      <img src={img} alt="⚠️" />
      <h3>{title}</h3>
      <h4>{message}</h4>
    </div>
  );
}
