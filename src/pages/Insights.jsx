import Layout from "../components/layout/Layout";

export default function Insights() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="card">Spending Breakdown</div>
        <div className="card">Income vs Expense</div>
        <div className="card">Insights</div>
      </div>
    </Layout>
  );
}