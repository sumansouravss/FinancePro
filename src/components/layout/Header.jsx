import { Menu, Sun, Moon } from "lucide-react";
import { useStore } from "../../store/useStore";
import profilepic from "../../assets/profile.png";

export default function Header({ onMenuClick }) {
  const { toggleTheme, theme } = useStore();

  return (
    <div className="flex justify-between items-center px-4 md:px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B0F14]">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* MOBILE MENU */}
        <button className="md:hidden" onClick={onMenuClick}>
          <Menu />
        </button>

        <h1 className="font-semibold text-gray-1400 dark:text-white">
          FinancePro
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* SEARCH */}
        <input
          placeholder="Search..."
          className="hidden sm:block bg-gray-100 dark:bg-[#111827] px-3 py-2 rounded-lg text-sm"
        />

        {/* THEME */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-green-500 text-white rounded-lg"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* USER */}
        <div className="hidden sm:flex items-center gap-2">
          <img
            src={profilepic}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-sm">John</p>
        </div>
      </div>
    </div>
  );
}
