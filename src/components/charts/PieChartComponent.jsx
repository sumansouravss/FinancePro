import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#d9f99d", "#84cc16", "#4ade80", "#22c55e"];

export default function PieChartComponent({ data }) {
  
  // 🔥 TOTAL
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">

      {/* 🔥 PIE CHART */}
      <div className="relative w-[220px] h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={50}
              outerRadius={110}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xl font-bold text-white">
            ₹{total.toLocaleString()}
          </p>
          <p className="text-xs text-gray-400">
            Total Expense
          </p>
        </div>
      </div>

      {/* 🔥 RIGHT PANEL (LIKE IMAGE) */}
      <div className="w-full md:w-[50%]">

        {/* TOP */}
        <div className="flex items-center gap-3 mb-4">
          
          <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
            💰
          </div>

          <div>
            <p className="text-s text-gray-400">
              Total Expense
            </p>
            <p className="text-lg font-semibold text-white">
              ₹{total.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="border-b border-white/10 mb-4" />

        {/* 🔥 2 COLUMN SPLIT */}
        <div className="grid grid-cols-2 gap-4">

          {data.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              
              {/* DOT */}
              <div
                className="w-2.5 h-2.5 rounded-full mt-1"
                style={{ backgroundColor: COLORS[i] }}
              />

              {/* TEXT */}
              <div>
                <p className="text-s text-gray-400">
                  {item.name}
                </p>
                <p className="text-sm text-white font-medium">
                  ₹{item.value.toLocaleString()}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}