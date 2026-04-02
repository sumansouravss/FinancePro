import Layout from "../components/layout/Layout";
import LineChartComponent from "../components/charts/LineChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import TransactionsTable from "../components/table/TransactionsTable";
import ExpenseCategory from "../components/charts/ExpenseCategory";

const data = [
  { name: "Jan", value: 1000 },
  { name: "Feb", value: 2000 },
  { name: "Mar", value: 3000 },
  { name: "Apr", value: 2500 },
  { name: "May", value: 4000 },
  { name: "Jun", value: 5000 },
];

const pieData = [
  { name: "Food", value: 32 },
  { name: "Travel", value: 25 },
  { name: "Shopping", value: 20 },
  { name: "Bills", value: 23 },
];

export default function Dashboard() {
  return (
    <Layout>

      {/* 🔝 TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
        <div className="card">
          <p className="text-gray-400 text-sm">Total Balance</p>
          <h2 className="text-3xl font-bold">₹45,200</h2>
          <p className="text-green-400 text-sm">+12%</p>
        </div>

        <div className="card">
          <p className="text-gray-400 text-sm">Income</p>
          <h2 className="text-3xl font-bold">₹25,000</h2>
        </div>

        <div className="card">
          <p className="text-gray-400 text-sm">Expenses</p>
          <h2 className="text-3xl font-bold text-red-400">₹18,500</h2>
        </div>

      </div>

      {/* 📊 CHART SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        <div className="card">
          <p className="text-gray-400 mb-0">Balance Over Time</p>
          <LineChartComponent data={data} />
        </div>

        <div className="card">
          <p className="text-gray-400 mb-10">Spending Breakdown</p>
          <PieChartComponent data={pieData} />
        </div>

      </div>

      {/* 📋 TABLE + SIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TransactionsTable />
        </div>

        <ExpenseCategory />
      </div>

      {/* 🔻 BOTTOM CARDS (🔥 UPGRADED) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        
        {/* 🔥 TOP SPENDING */}
        <div className="card relative overflow-hidden group">

          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          <div className="flex items-center gap-4 relative z-10">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/20 text-2xl">
              🍔
            </div>

            <div className="flex-1">
              <p className="text-gray-400 text-xs">Top Spending</p>
              <p className="text-gray-200 font-semibold text-lg">
                Food Category
              </p>

              <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[32%] bg-green-400 rounded-full transition-all duration-700" />
              </div>

              <p className="text-xs text-gray-400 mt-1">
                32% of total spend
              </p>
            </div>

            <span className="text-green-400 text-sm font-semibold">
              +12%
            </span>
          </div>
        </div>

        {/* 🔥 MONTHLY CHANGE */}
        <div className="card relative overflow-hidden group">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          <div className="flex items-center gap-4 relative z-10">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-xl">
              📈
            </div>

            <div className="flex-1">
              <p className="text-gray-400 text-xs">Monthly Change</p>

              <p className="text-green-400 font-semibold text-lg">
                +8% This Month
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Compared to last month
              </p>
            </div>

            <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
              ↑ Growth
            </div>
          </div>
        </div>

        {/* 🔥 INSIGHT CARD */}
        <div className="card relative overflow-hidden">

          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-gray-400 text-sm">Insight</p>
              <p className="text-gray-200 text-sm">
                You spent more on food this month
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 px-2 py-1 rounded-full text-xs text-gray-300">
              ↗ 18.5%
            </div>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "75%",
                background:
                  "linear-gradient(90deg, #84cc16, #a3e635, #d9f99d)",
              }}
            />
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Food spending increased compared to last month
          </p>

        </div>

      </div>

    </Layout>
  );
}