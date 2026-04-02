export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020617]/90 backdrop-blur-xl z-50">
      <div className="flex flex-col items-center gap-6">
        {/* 🔥 3D CUBE */}
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>

        {/* 🔥 BRAND */}
        <div className="text-center space-y-1">
          <p className="loader-title">FinancePro</p>
          <p className="loader-sub">Preparing your dashboard...</p>
        </div>
      </div>
    </div>
  );
}
