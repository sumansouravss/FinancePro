export default function EmptyState() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">No Transactions Yet</h2>
      <p className="text-gray-400 mt-2">
        It looks like you haven't added any transactions yet.
      </p>

      <button className="bg-green-500 px-6 py-3 mt-6 rounded">
        + Add Transaction
      </button>
    </div>
  );
}