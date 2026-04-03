import { useState, useRef, useEffect } from "react";
import { useStore } from "../../store/useStore";

import {
  Search,
  Bell,
  Bot,
  Sun,
  Moon,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function Header({ onMenuClick }) {
  const { toggleTheme, theme } = useStore();

  const [showAlerts, setShowAlerts] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [search, setSearch] = useState("");
  const [unread, setUnread] = useState(3);

  // ✅ refs
  const alertsRef = useRef();
  const profileRef = useRef();
  const aiRef = useRef();

  // ✅ UPDATED outside click handler (FIXED)
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Alerts
      if (
        alertsRef.current &&
        !alertsRef.current.contains(e.target)
      ) {
        setShowAlerts(false);
      }

      // Profile
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }

      // AI
      if (
        aiRef.current &&
        !aiRef.current.contains(e.target)
      ) {
        setShowAI(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const alerts = [
    "Payment received 💰",
    "New transaction added",
    "Monthly report ready",
  ];

  const handleAlertsClick = () => {
    setShowAlerts(!showAlerts);
    setShowProfile(false);
    setShowAI(false);
    setUnread(0);
  };

  return (
    <div className="relative flex flex-wrap md:flex-nowrap justify-between items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0B0F14]">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button
  onClick={onMenuClick}
  className="md:hidden p-2 rounded-lg hover:bg-white/10 text-green-500"
>
  <Menu size={18} />
</button>

        <h2 className="font-semibold text-white text-base md:text-2xl">
          FinancePro
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex flex-wrap items-center justify-end gap-2 w-full md:w-auto">

        {/* SEARCH */}
        <div className="flex items-center gap-2 bg-[#111827] px-3 md:px-4 py-2 rounded-full border border-white/10 w-full sm:w-auto">
          <Search size={14} className="text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-full sm:w-40 md:w-60"
          />
        </div>

        {/* AI */}
        <button
          onClick={() => {
            setShowAI(!showAI);
            setShowAlerts(false);
            setShowProfile(false);
          }}
          className="flex items-center gap-1 md:gap-2 bg-[#111827] border border-white/10 px-2 md:px-3 py-2 rounded-full hover:bg-white/10 transition"
        >
          <Bot color="grey" size={18} />
          <span className="hidden md:inline text-sm text-gray-400">AI</span>
        </button>

        {/* AI POPUP */}
        {showAI && (
          <div
            ref={aiRef}
            className="absolute right-2 md:right-20 top-16 w-72 bg-[#111827] border border-white/10 rounded-xl p-3 text-sm text-white shadow-lg z-50"
          >
            <p className="mb-2 text-gray-400">AI Assistant</p>
            <p className="text-xs">Try: "Show expenses"</p>
          </div>
        )}

        {/* ALERTS */}
        <div ref={alertsRef} className="relative">
          <button
            onClick={handleAlertsClick}
            className="flex items-center gap-1 md:gap-2 bg-[#111827] border border-white/10 px-2 md:px-3 py-2 rounded-full hover:bg-white/10 transition"
          >
            <Bell color="grey" size={16} />
            <span className="hidden md:inline text-sm text-gray-400">
              Alerts
            </span>
          </button>

          {unread > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1.5 rounded-full">
              {unread}
            </span>
          )}

          {showAlerts && (
            <div className="absolute right-0 mt-2 w-56 bg-[#111827] border border-white/10 rounded-xl shadow-lg p-2 z-50">
              {alerts.map((item, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-300 p-2 hover:bg-white/10 rounded-lg"
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* THEME */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-green-500 rounded-lg hover:scale-105 transition"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* PROFILE */}
        <div ref={profileRef} className="relative">
          <div
            onClick={() => {
              setShowProfile(!showProfile);
              setShowAlerts(false);
              setShowAI(false);
            }}
            className="flex items-center gap-2 bg-[#111827] border border-white/10 px-2 md:px-3 py-1.5 md:py-2 rounded-full cursor-pointer hover:bg-white/10 transition"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
            />

            <div className="hidden md:block text-sm">
              <p className="text-white leading-none">John</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>

            <ChevronDown size={14} className="hidden md:block" />
          </div>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-44 bg-[#111827] border border-white/10 rounded-xl shadow-lg p-2 text-sm z-50">
              <p className="p-2 hover:bg-white/10  text-green-400 rounded-lg cursor-pointer">
                Profile
              </p>
              <p className="p-2 hover:bg-white/10   text-green-400 rounded-lg cursor-pointer">
                Settings
              </p>
              <p className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg cursor-pointer">
                Logout
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}