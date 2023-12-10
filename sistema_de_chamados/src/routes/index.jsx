import { Routes, Route } from "react-router-dom";

import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";
import Dashboard from "../pages/Dashboard";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

// 2º passo: criar as rotas das páginas
// O path é o caminho e o element é o compontente que será renderizado
