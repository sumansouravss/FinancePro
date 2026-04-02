import Layout from "../components/layout/Layout";
import LineChartComponent from "../components/charts/LineChartComponent";

const data = [
  { name: "Jan", value: 2000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2500 },
  { name: "Apr", value: 4000 },
  { name: "May", value: 4500 },
  { name: "Jun", value: 6000 },
];

export default function Insights() {
  return (
    <Layout>

      {/* 🔝 TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {/* SPENDING */}
        <div className="card">
          <p className="text-gray-400 text-sm">Spending Breakdown</p>
          <h2 className="text-2xl font-bold mt-2">₹18,500</h2>

          {/* BAR */}
          <div className="mt-3 h-2 bg-white/10 rounded-full">
            <div className="h-full w-[65%] bg-green-400 rounded-full" />
          </div>
        </div>

        {/* INCOME VS EXPENSE */}
        <div className="card">
          <p className="text-gray-400 text-sm">Income vs Expense</p>

          <div className="flex justify-between mt-3 text-sm">
            <span className="text-green-400">Income ₹25K</span>
            <span className="text-red-400">Expense ₹18K</span>
          </div>

          <div className="mt-3 h-2 bg-white/10 rounded-full flex overflow-hidden">
            <div className="w-[60%] bg-green-400" />
            <div className="w-[40%] bg-red-400" />
          </div>
        </div>

        {/* SAVINGS */}
        <div className="card">
          <p className="text-gray-400 text-sm">Savings</p>
          <h2 className="text-2xl font-bold mt-2 text-green-400">
            ₹6,500
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            You saved 26% of income
          </p>
        </div>
      </div>

      {/* 📊 CHART */}
      <div className="card mb-6">
        <p className="text-gray-400 mb-2">Monthly Overview</p>
        <LineChartComponent data={data} />
      </div>

      {/* 🔥 INSIGHTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* CATEGORY INSIGHT */}
        <div className="card">
          <p className="text-gray-400 text-sm mb-2">Top Category</p>

          <div className="flex justify-between items-center">
            <p className="font-semibold">🍔 Food</p>
            <span className="text-green-400 text-sm">32%</span>
          </div>

          <div className="mt-2 h-2 bg-white/10 rounded-full">
            <div className="h-full w-[32%] bg-green-400 rounded-full" />
          </div>
        </div>

        {/* ALERT */}
        <div className="card">
          <p className="text-gray-400 text-sm mb-2">Smart Insight</p>

          <p className="text-sm text-gray-200">
            ⚠ You are spending more on food this month compared to last month.
          </p>
        </div>

        {/* TREND */}
        <div className="card">
          <p className="text-gray-400 text-sm mb-2">Trend</p>

          <p className="text-green-400 text-lg font-semibold">
            +18.5% Increase
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Spending increased compared to last month
          </p>
        </div>

        {/* GOAL */}
        <div className="card">
          <p className="text-gray-400 text-sm mb-2">Budget Goal</p>

          <div className="flex justify-between text-sm">
            <span>₹20,000</span>
            <span className="text-red-400">₹18,500</span>
          </div>

          <div className="mt-2 h-2 bg-white/10 rounded-full">
            <div className="h-full w-[92%] bg-red-400 rounded-full" />
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Almost reached your limit ⚠
          </p>
        </div>

      </div>

    </Layout>
  );
}