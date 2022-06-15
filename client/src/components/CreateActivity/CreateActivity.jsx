export function CreateActivity() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Name</label>
      <input type="text" />
      <label>Duration</label>
      <input type="number" />
      <label>Difficulty</label>
      <select name="select">
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <label>Season</label>
      <select name="select">
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <label>Countries</label>
      <select name="select">
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <button>Create Activity</button>
    </form>
  );
}
