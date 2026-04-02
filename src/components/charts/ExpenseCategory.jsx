export default function ExpenseCategory() {
  const segments = 28; // total bars
  const active = 22;   // filled bars

  return (
    <div className="card p-5 flex flex-col justify-between">

      {/* 🔝 HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Expense Category</h2>

        <div className="flex gap-2">
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">⚙️</button>
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">↗</button>
        </div>
      </div>

      {/* 🔥 GAUGE */}
      <div className="flex flex-col items-center justify-center">

        <div className="relative w-[260px] h-[140px] flex items-end justify-center overflow-hidden">

          {/* SEGMENTS WRAPPER */}
          <div className="relative w-[260px] h-[260px]">

            {[...Array(segments)].map((_, i) => {
              // ✅ FIXED ANGLE (CENTERED SEMI-CIRCLE)
              const angle = -90 + (i * 180) / segments;

              return (
                <div
                  key={i}
                  className="absolute w-[6px] h-[18px] rounded-full"
                  style={{
                    top: "90%",
                    left: "50%",
                    transform: `
                      rotate(${angle}deg)
                      translateY(-110px)
                    `,
                    transformOrigin: "center",

                    background:
                      i < active
                        ? "linear-gradient(to top, #fde047, #facc15)"
                        : "#3f3f46",

                    opacity: i < active ? 1 : 0.3,
                    transition: "all 0.3s ease",
                  }}
                />
              );
            })}

          </div>

          {/* CENTER TEXT */}
          <div className="absolute bottom-4 flex flex-col items-center">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs text-gray-400">Data Recorded</p>
          </div>

        </div>

        {/* LEGEND */}
        <div className="flex gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            Income
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-500 rounded-full" />
            Outcome
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        <p>Profit is 24% more short last month</p>

        <button className="bg-white/5 px-3 py-1 rounded-full hover:bg-white/10">
          ↗ 18.5%
        </button>
      </div>
    </div>
  );
}