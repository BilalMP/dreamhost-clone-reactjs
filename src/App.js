import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wordpress from "./pages/Wordpress";
import Hosting from "./pages/Hosting";
import Website from "./pages/Website";
import Domains from "./pages/Domains";
import Email from "./pages/Email";
import ProServices from "./pages/ProServices";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wordpress" element={<Wordpress />} />
      <Route path="/hosting" element={<Hosting />} />
      <Route path="/ai-website-builder" element={<Website />} />
      <Route path="/domains" element={<Domains />} />
      <Route path="/email" element={<Email />} />
      <Route path="/proservices" element={<ProServices />} />
    </Routes>
  );
}

export default App;
