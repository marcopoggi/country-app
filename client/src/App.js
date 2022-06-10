import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Landing/Landing.jsx";
import { Countries } from "./pages/Countries/Countries.jsx";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:id" element={<h1>Country Detail</h1>} />
          <Route path="activities" element={<h1>Create activity</h1>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
