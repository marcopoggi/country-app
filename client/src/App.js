import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Landing/Landing.jsx";
import { Countries } from "./pages/Countries/Countries.jsx";
import { Detail } from "./pages/Detail/Detail.jsx";
import { Activities } from "./pages/Activities/Activities.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="countries" element={<Countries />} />
        <Route path="countries/:idOrName" element={<Detail />} />
        <Route path="activities" element={<Activities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
