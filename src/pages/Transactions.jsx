import Layout from "../components/layout/Layout";
import TransactionsTable from "../components/table/TransactionsTable";
import EmptyState from "../components/states/EmptyState";
import { useStore } from "../store/useStore";

export default function Transactions() {
  const { transactions } = useStore();

  return (
    <Layout>
      {transactions.length === 0 ? <EmptyState /> : <TransactionsTable />}
    </Layout>
  );
}