import Layout from "../components/layout/Layout";
import LineChartComponent from "../components/charts/LineChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import TransactionsTable from "../components/table/TransactionsTable";

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
      
      {/* 🔝 CARDS */}
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* LINE CHART */}
        <div className="card">
          <p className="text-gray-400 mb-3">Balance Over Time</p>
          <LineChartComponent data={data} />
        </div>

        {/* DONUT */}
        <div className="card">
          <p className="text-gray-400 mb-3">Spending Breakdown</p>
          <PieChartComponent data={pieData} />
        </div>

      </div>

      {/* 📋 TABLE */}
      <TransactionsTable />

      {/* 🔻 BOTTOM CARDS */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        
        <div className="card flex items-center gap-3">
          <span className="text-xl">🍔</span>
          <div>
            <p className="text-gray-400 text-sm">Top Spending</p>
            <p className="text-gray-200 font-semibold">Food Category</p>
          </div>
        </div>

        <div className="card flex items-center gap-3">
          <span className="text-xl">📈</span>
          <div>
            <p className="text-gray-400 text-sm">Monthly Change</p>
            <p className="text-green-400 font-semibold">+8% This Month</p>
          </div>
        </div>

        <div className="card flex items-center gap-3">
          <span className="text-xl">💡</span>
          <div>
            <p className="text-gray-400 text-sm">Insight</p>
            <p className="text-gray-200 text-sm">
              You spent more on food this month
            </p>
          </div>
        </div>

      </div>

    </Layout>
  );
}