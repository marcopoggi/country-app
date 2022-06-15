import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Landing/Landing.jsx";
import { Countries } from "./pages/Countries/Countries.jsx";
import { Detail } from "./pages/Detail/Detail.jsx";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:idOrName" element={<Detail />} />
          <Route path="activities" element={<h1>Create activity</h1>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
