import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function LineChartComponent({ data = [] }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>

          
          
          {/* 🔥 GRID (subtle like design) */}
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

          {/* 🔥 MAIN LINE (UPDATED) */}
          <Line
  type="monotone"
  dataKey="value"
  stroke="#22C55E"
  strokeWidth={3}
  dot={{ r: 5, fill: "#22C55E" }}
  activeDot={{ r: 7 }}
  style={{
    filter: "drop-shadow(0 0 10px #22C55E)",
  }}
/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}