import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wordpress from "./pages/Wordpress";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wordpress" element={<Wordpress />} />
    </Routes>
  );
}

export default App;
