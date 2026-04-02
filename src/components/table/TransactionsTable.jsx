import { useState, useMemo } from "react";
import { useStore } from "../../store/useStore";
import { exportToCSV, exportToJSON } from ".././export/exportUtils";
import toast from "react-hot-toast";

import { MoreVertical, Search } from "lucide-react";

export default function TransactionsTable() {
  const {
    role,
    filteredTransactions,
    deleteTransaction,
    updateTransaction,
  } = useStore();

  const data = filteredTransactions();

  const [query, setQuery] = useState("");
  const [openRow, setOpenRow] = useState(null);
  const [showExport, setShowExport] = useState(false);

  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);

  const [editData, setEditData] = useState(null);

  const ITEMS_PER_PAGE = 5;

  // 🔥 FILTER + SEARCH + SORT
  const processedData = useMemo(() => {
    let result = [...data];

    if (query) {
      result = result.filter((t) =>
        t.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (typeFilter !== "all") {
      result = result.filter((t) => t.type === typeFilter);
    }

    if (sortBy === "amount") {
      result.sort((a, b) => b.amount - a.amount);
    } else {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return result;
  }, [data, query, typeFilter, sortBy]);

  const totalPages = Math.ceil(processedData.length / ITEMS_PER_PAGE);

  const paginatedData = processedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="card mt-6 p-4">

      {/* 🔝 HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">
        <h2 className="text-lg font-semibold">Transaction History</h2>

        <div className="flex flex-wrap gap-2 items-center">

          {/* SEARCH */}
          <div className="flex items-center bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
            <Search size={14} />
            <input
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none ml-2 text-sm w-32"
            />
          </div>

          {/* FILTER */}
        <select
  className="
    px-3 py-2 rounded-lg border text-sm transition appearance-none
    bg-white text-black border-gray-300
    dark:bg-[#020617] dark:text-white dark:border-white/10
    focus:outline-none focus:ring-2 focus:ring-green-500
  "
>
  <option className="bg-white text-black dark:bg-[#020617] dark:text-white">
    All
  </option>
  <option className="bg-white text-black dark:bg-[#020617] dark:text-white">
    Income
  </option>
  <option className="bg-white text-black dark:bg-[#020617] dark:text-white">
    Expense
  </option>
</select>

          {/* SORT */}
          <select
  className="
    px-3 py-2 rounded-lg border text-sm transition appearance-none
    bg-white text-black border-gray-300
    dark:bg-[#020617] dark:text-white dark:border-white/10
    focus:outline-none focus:ring-2 focus:ring-green-500
  "
>
            <option value="date">Sort: Date</option>
            <option value="amount">Sort: Amount</option>
          </select>

          {/* CLEAR */}
          <button
            onClick={() => {
              setQuery("");
              setTypeFilter("all");
              setSortBy("date");
              toast("Filters cleared");
            }}
            className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm hover:bg-white/10"
          >
            Clear
          </button>

          {/* 🔥 EXPORT */}
          {role === "admin" && (
            <div className="relative">
              <button
                onClick={() => setShowExport(!showExport)}
                className="bg-green-500 px-4 py-2 rounded-lg text-sm hover:bg-green-600"
              >
                Export
              </button>

              {showExport && (
                <div className="absolute right-0 mt-2 w-40 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg z-10">
                  
                  <p
                    onClick={() => {
                      toast.loading("Exporting CSV...");
                      setTimeout(() => {
                        exportToCSV(processedData);
                        toast.dismiss();
                        toast.success("CSV exported");
                      }, 800);
                      setShowExport(false);
                    }}
                    className="p-2 hover:bg-white/10 cursor-pointer"
                  >
                    Export CSV
                  </p>

                  <p
                    onClick={() => {
                      toast.loading("Exporting JSON...");
                      setTimeout(() => {
                        exportToJSON(processedData);
                        toast.dismiss();
                        toast.success("JSON exported");
                      }, 800);
                      setShowExport(false);
                    }}
                    className="p-2 hover:bg-white/10 cursor-pointer"
                  >
                    Export JSON
                  </p>

                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 📋 TABLE */}
      <div className="space-y-3">
        {paginatedData.length === 0 ? (
          <div className="flex flex-col items-center py-10 text-gray-400">
            <span className="text-3xl mb-2">📭</span>
           <div className="flex flex-col items-center py-10 text-gray-400">
  <span className="text-3xl mb-2">📭</span>
  <p>No transactions found</p>
</div>
          </div>
        ) : (
          paginatedData.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${t.category}`}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm">{t.category}</p>
                  <p className="text-xs text-gray-400">{t.date}</p>
                </div>
              </div>

              <div className="hidden sm:block text-sm">₹{t.amount}</div>

              <div
                className={
                  t.type === "expense"
                    ? "text-red-400 text-sm"
                    : "text-green-400 text-sm"
                }
              >
                {t.type}
              </div>

              <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                {t.type === "expense" ? "Pending" : "Successful"}
              </span>

              {/* ACTION */}
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenRow(openRow === t.id ? null : t.id)
                  }
                >
                  <MoreVertical size={16} />
                </button>

                {openRow === t.id && (
                  <div className="absolute right-0 top-8 w-32 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg z-20">

                    {role === "admin" && (
                      <p
                        onClick={() => {
                          setEditData(t);
                          setOpenRow(null);
                        }}
                        className="p-2 hover:bg-white/10 cursor-pointer"
                      >
                        Edit
                      </p>
                    )}

                    <p className="p-2 hover:bg-white/10 cursor-pointer">
                      View
                    </p>

                    {role === "admin" && (
                      <p
                        onClick={() => {
                          deleteTransaction(t.id);
                          toast.success("Transaction deleted");
                          setOpenRow(null);
                        }}
                        className="p-2 hover:bg-red-500/20 text-red-400 cursor-pointer"
                      >
                        Delete
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔥 EDIT MODAL */}
      {editData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#020617] p-6 rounded-xl w-80 space-y-3">
            <h3 className="text-lg font-semibold">Edit Transaction</h3>

            <input
              value={editData.category}
              onChange={(e) =>
                setEditData({ ...editData, category: e.target.value })
              }
              className="w-full p-2 bg-white/5 rounded"
            />

            <input
              value={editData.amount}
              onChange={(e) =>
                setEditData({ ...editData, amount: +e.target.value })
              }
              className="w-full p-2 bg-white/5 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditData(null)}
                className="px-3 py-1 bg-white/10 rounded"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  updateTransaction(editData);
                  toast.success("Transaction updated");
                  setEditData(null);
                }}
                className="px-3 py-1 bg-green-500 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔻 PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-green-500 text-white"
                  : "bg-white/5"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}