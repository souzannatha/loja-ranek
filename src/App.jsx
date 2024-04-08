import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Contato from "./Components/Contato";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
