import { useState } from "react";
import { useStore } from "../../store/useStore";
import { Search, MoreVertical, Pencil } from "lucide-react";

export default function TransactionsTable() {
  const { role } = useStore();
  const [showExport, setShowExport] = useState(false);
  const { filteredTransactions, setFilter } = useStore();
const data = filteredTransactions();

  return (
    <div className="card mt-6">
      
      {/* 🔝 HEADER + FILTERS */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        
        {/* LEFT */}
        <div className="flex items-center gap-2 flex-wrap">
          
          <h3 className="text-sm text-gray-300 mr-2">Transactions</h3>

          <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm">
            <Search size={14} />
            <span>All Transactions</span>
          </div>

          <select className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm">
            <option>All Time</option>
          </select>

          <select className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm">
            <option>Sort: Date</option>
          </select>

          <button className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm hover:bg-white/10">
            Clear Filters
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {role === "admin" && (
            <button
              onClick={() => setShowExport(!showExport)}
              className="bg-green-500 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-green-600"
            >
              + Add Transaction
            </button>
          )}

          {showExport && (
            <div className="absolute right-0 mt-2 w-40 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg z-10">
              <p className="p-2 hover:bg-white/10 cursor-pointer">
                Export CSV
              </p>
              <p className="p-2 hover:bg-white/10 cursor-pointer">
                Export JSON
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 mb-4">

  <select
    onChange={(e) => setFilter(e.target.value)}
    className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm"
  >
    <option value="all">All Transactions</option>
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>

</div>

      {/* 📋 TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          
          {/* HEADER */}
          <thead className="text-gray-400 border-b border-white/10">
            <tr>
              <th className="text-left py-3">Date</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Category</th>
              <th className="text-left">Type</th>
              <th></th>
            </tr>
          </thead>
          

          {/* BODY */}
          <tbody>
            {data.map((t) => (
              <tr
                key={t.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="py-3">{t.date}</td>

                <td>₹{t.amount}</td>

                <td>{t.category}</td>

                <td
                  className={
                    t.type === "expense"
                      ? "text-red-400"
                      : "text-green-400"
                  }
                >
                  {t.type === "expense" ? "Expense" : "Income"}
                </td>

                {/* ACTIONS */}
                <td className="flex items-center gap-2 justify-end pr-2">
                  <button className="p-2 rounded bg-white/5 hover:bg-white/10">
                    <Pencil size={14} />
                  </button>

                  <button className="p-2 rounded bg-white/5 hover:bg-white/10">
                    <MoreVertical size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔻 PAGINATION */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        
        <div></div>

        <div className="flex items-center gap-2">
          <button>{"<"}</button>

          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`px-2 py-1 rounded ${
                n === 2 ? "bg-green-500 text-white" : "hover:bg-white/10"
              }`}
            >
              {n}
            </button>
          ))}

          <button>{">"}</button>
        </div>

        <div>10 rows page</div>
      </div>
    </div>
  );
}