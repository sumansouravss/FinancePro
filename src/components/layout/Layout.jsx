import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Menu } from "lucide-react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 md:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed z-50 md:static transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* MAIN */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <Header onMenuClick={() => setOpen(true)} />

        {/* CONTENT */}
        <main className="p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}