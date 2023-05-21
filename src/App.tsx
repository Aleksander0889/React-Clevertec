import Layout from "./pages/Layate";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Contract from "./pages/Contract";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rules" element={<Terms />} />
        <Route path="contract" element={<Contract />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
