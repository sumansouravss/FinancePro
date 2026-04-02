import { Link, useLocation } from "react-router-dom";
import { useStore } from "../../store/useStore";
import { Home, List, BarChart, Box } from "lucide-react";
import { exportToCSV, exportToJSON } from "../export/exportUtils";

export default function Sidebar() {
  const { role, toggleRole, transactions } = useStore();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-green-500/20 text-green-400 shadow-inner"
      : "text-gray-400 hover:bg-white/5";

  return (
    <div
      className="w-64 md:w-64 bg-white dark:bg-[#0F172A]  h-screen p-5 flex flex-col justify-between bg-gradient-to-b from-[#0B1220] via-[#020617] to-[#020617]
      border-r border-white/5"
    >
      <div className="sidebar-glow ..."></div>

      {/* 🔝 TOP */}
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-2 mb-8">
          <Box className="text-gray-300" size={60} />
          <h1 className="text-2xl font-semibold text-green-400">FinancePro</h1>
        </div>

        {/* NAV */}
        <nav className="space-y-2">
          <Link
            to="/"
            className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${isActive("/")}`}
          >
          <Home size={18} className="icon-hover" />

            Dashboard
          </Link>

          <Link
            to="/transactions"
            className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${isActive("/transactions")}`}
          >
            <List size={18} className="icon-hover" />
            Transactions
          </Link>

          <Link
            to="/insights"
            className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${isActive("/insights")}`}
          >
            <BarChart size={18} className="icon-hover" />
            Insights
          </Link>
        </nav>
      </div>

      {/* 🔻 BOTTOM */}
      <div className="space-y-4">
        {/* ROLE */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-sm text-gray-400 mb-2">
            Role: <span className="text-gray-200 capitalize">{role}</span>
          </p>

          {/* TOGGLE SWITCH STYLE */}
          <div className="flex items-center bg-[#0B1220] border border-white/10 rounded-xl p-1">
            <button
              onClick={toggleRole}
              className={`flex-1 text-sm py-1 rounded-lg ${
                role === "viewer" ? "bg-white/10 text-white" : "text-gray-400"
              }`}
            >
              Viewer
            </button>

            <button
              onClick={toggleRole}
              className={`flex-1 text-sm py-1 rounded-lg ${
                role === "admin"
                  ? "bg-green-500 text-white shadow-md"
                  : "text-gray-400"
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        {/* EXPORT BUTTON */}
        <div className="relative">
  <button
    onClick={() => exportToCSV(transactions)}
    className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-2 rounded-xl hover:bg-white/10 transition text-sm"
  >
    ⬇ Export CSV
  </button>

  <button
    onClick={() => exportToJSON(transactions)}
    className="w-full mt-2 flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-2 rounded-xl hover:bg-white/10 transition text-sm"
  >
    ⬇ Export JSON
  </button>
</div>

        {/* SAVED STATUS */}
        <p className="text-xs text-green-400 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Saved Locally
        </p>
      </div>
    </div>
  );
}
