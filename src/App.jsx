import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Ganhadores } from "./pages/ganhadores/Ganhadores";
import { QuemSomos } from "./pages/sobre-nos/QuemSomos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Ganhadores" element={<Ganhadores />} />
      <Route path="Quem-somos" element={<QuemSomos />} />
    </Routes>
  );
}

export default App;
