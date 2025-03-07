import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Ganhadores } from "./pages/ganhadores/Ganhadores";
import { QuemSomos } from "./pages/sobre-nos/QuemSomos";
import { Vendas } from "./pages/vendas/Vendas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Ganhadores" element={<Ganhadores />} />
      <Route path="Quem-somos" element={<QuemSomos />} />
      <Route path="Vendas" element={<Vendas />} />
    </Routes>
  );
}

export default App;
