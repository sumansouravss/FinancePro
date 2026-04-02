import Layout from "../components/layout/Layout";
import LineChartComponent from "../components/charts/LineChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import TransactionsTable from "../components/table/TransactionsTable";
import ExpenseCategory from "../components/charts/ExpenseCategory";
import Card from "../components/ui/Card";

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
        
        <Card>
          <p className="text-gray-400 text-sm">Total Balance</p>
          <h2 className="text-3xl  text-green-400 font-bold">₹45,200</h2>
          <p className="text-green-400 text-sm">+12%</p>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Income</p>
          <h2 className="text-3xl  text-yellow-400 font-bold">₹25,000</h2>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Expenses</p>
          <h2 className="text-3xl font-bold text-red-400">₹18,500</h2>
        </Card>

      </div>

      {/* 📊 CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        <Card>
          <p className="text-gray-400 mb-0">Balance Over Time</p>
          <LineChartComponent data={data} />
        </Card>

        <Card>
          <p className="text-gray-400 mb-10">Spending Breakdown</p>
          <PieChartComponent data={pieData} />
        </Card>

      </div>

      {/* 📋 TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TransactionsTable />
        </div>

        <ExpenseCategory />
      </div>

      {/* 🔻 BOTTOM CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        
        <Card className="relative overflow-hidden group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/20 text-2xl">
              🍔
            </div>

            <div className="flex-1">
              <p className="text-gray-400 text-xs">Top Spending</p>
              <p className="text-gray-200 font-semibold text-lg">
                Food Category
              </p>

              <div className="mt-2 h-2 bg-white/10 rounded-full">
                <div className="h-full w-[32%] bg-green-400 rounded-full" />
              </div>
            </div>

            <span className="text-green-400 text-sm font-semibold">
              +12%
            </span>
          </div>
        </Card>

        <Card>
          <p className="text-gray-400 text-xs">Monthly Change</p>
          <p className="text-green-400 font-semibold text-lg">
            +8% This Month
          </p>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Insight</p>
          <p className="text-gray-200 text-sm">
            You spent more on food this month
          </p>
        </Card>

      </div>

    </Layout>
  );
}