import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Countries App</h1>} />
      <Route path="countries" element={<h1>Country List</h1>} />
      <Route path="countries/:id" element={<h1>Country Detail</h1>} />
      <Route path="activities" element={<h1>Create activity</h1>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
