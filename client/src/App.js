import { Routes, Route } from "react-router-dom";
import { Welcome } from "./components/welcome/welcome.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="countries" element={<h1>Country List</h1>} />
        <Route path="countries/:id" element={<h1>Country Detail</h1>} />
        <Route path="activities" element={<h1>Create activity</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
