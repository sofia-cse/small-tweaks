import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Privacy from "./components/Privacy/Privacy";

function Router() {
  return (
    <Routes>

      {/* Homepage */}
      <Route path="/" element={<App />} />

      {/* Privacy routes */}
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/privacy-policy" element={<Privacy />} />

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default Router;