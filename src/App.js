import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wordpress from "./pages/Wordpress";
import Hosting from "./pages/Hosting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wordpress" element={<Wordpress />} />
      <Route path="/hosting" element={<Hosting />} />
    </Routes>
  );
}

export default App;
