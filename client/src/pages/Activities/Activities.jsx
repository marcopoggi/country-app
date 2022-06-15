import { useNavigate } from "react-router-dom";
import { CreateActivity } from "../../components/CreateActivity/CreateActivity";

export function Activities() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Create activity</h1>
      <CreateActivity />
    </div>
  );
}
