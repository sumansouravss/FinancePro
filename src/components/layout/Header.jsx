import { useStore } from "../../store/useStore";
import {
  Search,
  Bell,
  Bot,
  Sun,
  Moon,
  ChevronDown,
  Menu,
  Wheat,
} from "lucide-react";

export default function Header({ onMenuClick }) {
  const { toggleTheme, theme } = useStore();

  return (
    <div className="flex justify-between items-center px-4 md:px-6 py-3 border-b border-white/10 bg-[#0B0F14]">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* MOBILE MENU */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
        >
          <Menu size={18} />
        </button>

        <h2 className="font-semibold text-white text-base md:text-2xl">
          FinancePro
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 md:gap-3">

        {/* 🔍 SEARCH (HIDE ON SMALL) */}
        <div className="hidden sm:flex items-center gap-2 bg-[#111827] px-3 md:px-4 py-2 rounded-full border border-white/10">
          <Search size={14} className="text-gray-400" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-24 md:w-40"
          />
        </div>

        {/* 🤖 AI (HIDE TEXT ON MOBILE) */}
        <button className="flex items-center gap-1 md:gap-2 bg-[#111827] border border-white/10 px-2 md:px-3 py-2 rounded-full hover:bg-white/10 transition">
          <Bot color="grey" size={20} />
          <span className="hidden md:inline text-sm text-gray-400">
            AI
          </span>
        </button>

        {/* 🔔 NOTIFICATIONS */}
        <div className="relative">
          <button className="flex items-center gap-1 md:gap-2 bg-[#111827] border border-white/10 px-2 md:px-3 py-2 rounded-full hover:bg-white/10 transition">
            <Bell color="grey" size={16} />
            <span className="hidden md:inline text-sm text-gray-400">
              Alerts
            </span>
          </button>

          <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1.5 rounded-full">
            3
          </span>
        </div>

        {/* 🌗 THEME */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-green-500 rounded-lg hover:scale-105 transition"
        >
          {theme === "dark" ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}
        </button>

        {/* 👤 PROFILE */}
        <div className="flex items-center gap-2 bg-[#111827] border border-white/10 px-2 md:px-3 py-1.5 md:py-2 rounded-full cursor-pointer hover:bg-white/10 transition">
          
          <img
            src="https://i.pravatar.cc/40"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full"
          />

          {/* HIDE NAME ON SMALL */}
          <div className="hidden md:block text-sm">
            <p className="text-white leading-none">John</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>

          <ChevronDown size={14} className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}