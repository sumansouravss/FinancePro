import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#22C55E", "#3B82F6", "#F97316", "#EF4444"];

export default function PieChartComponent({ data }) {
  
  // 🔥 CUSTOM LABEL WITH CONNECTOR LINE
  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 40;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const align = x > cx ? "start" : "end";

    return (
      <text
        x={x}
        y={y}
        fill={COLORS[index]}
        textAnchor={align}
        dominantBaseline="central"
        style={{ fontSize: "12px", fontWeight: "500" }}
      >
        {`${Math.round(percent * 100)}% ${data[index]?.name || ""}`}
      </text>
    );
  };

  return (
    <div className="flex items-center justify-center overflow-visible">
      
      <ResponsiveContainer width={500} height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={80}
            outerRadius={160}
            paddingAngle={5}
            label={renderCustomLabel}   // 🔥 LABELS
            labelLine={true}            // 🔥 CONNECTOR LINES
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}