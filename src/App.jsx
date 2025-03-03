import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Ganhadores } from "./pages/ganhadores/Ganhadores";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Ganhadores" element={<Ganhadores />} />
    </Routes>
  );
}

export default App;
