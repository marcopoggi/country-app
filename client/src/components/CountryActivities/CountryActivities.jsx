export function CountryActivities({ activities }) {
  return activities ? (
    activities.length === 0 ? (
      <div>
        <h3>No activities</h3>
      </div>
    ) : (
      activities.map((act) => (
        <div key={act.id}>
          <h3>Name: {act.name}</h3>
          <h3>Season: {act.season}</h3>
          <h3>Difficulty: {act.difficulty}</h3>
          <h3>Duration: {act.duration}</h3>
        </div>
      ))
    )
  ) : null;
}
