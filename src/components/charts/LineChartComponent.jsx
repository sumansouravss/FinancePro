import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function LineChartComponent({ data = [] }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

          {/* 🔥 GRADIENT */}
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22C55E" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* GRID */}
          <CartesianGrid
            stroke="rgba(255,255,255,0.05)"
            vertical={false}
          />

          {/* X AXIS */}
          <XAxis
            dataKey="name"
            stroke="#6B7280"
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{
              background: "#020617",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          {/* 🔥 AREA (FILL) */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#22C55E"
            strokeWidth={3}
            fill="url(#greenGradient)"
            dot={{ r: 5, fill: "#22C55E" }}
            activeDot={{ r: 7 }}
            style={{
              filter: "drop-shadow(0 0 10px #22C55E)",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}