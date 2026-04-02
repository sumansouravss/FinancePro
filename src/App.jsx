import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStore } from "./store/useStore";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

import Loader from "./components/ui/Loader";

// 🌗 THEME WRAPPER
function AppWrapper({ children }) {
  const { theme } = useStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return children;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // 🔥 LOADER TIMER
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppWrapper>
      {loading ? (
        <Loader />
      ) : (
        <div className="animate-page">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </AppWrapper>
  );
}