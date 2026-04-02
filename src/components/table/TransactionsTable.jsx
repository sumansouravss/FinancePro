import { useState, useMemo } from "react";
import { useStore } from "../../store/useStore";
import { exportToCSV, exportToJSON } from ".././export/exportUtils";

import {
  MoreVertical,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function TransactionsTable() {
  const { role, filteredTransactions } = useStore();
  const data = filteredTransactions();

  const [query, setQuery] = useState("");
  const [openRow, setOpenRow] = useState(null);
  const [showExport, setShowExport] = useState(false);

  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);

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

  // 🔥 PAGINATION
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
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          {/* SORT */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm"
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
            }}
            className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm hover:bg-white/10"
          >
            Clear
          </button>

          {/* 🔥 EXPORT BUTTON */}
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
                    onClick={() => exportToCSV(processedData)}
                    className="p-2 hover:bg-white/10 cursor-pointer"
                  >
                    Export CSV
                  </p>

                  <p
                    onClick={() => exportToJSON(processedData)}
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
          <p className="text-center py-6 text-gray-400">
            No transactions found
          </p>
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

              <div className="hidden sm:block text-sm">
                ₹{t.amount}
              </div>

              <div
                className={
                  t.type === "expense"
                    ? "text-red-400 text-sm"
                    : "text-green-400 text-sm"
                }
              >
                {t.type}
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  t.type === "expense"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
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
                  <div className="absolute right-0 top-8 w-28 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg">
                    
                    {role === "admin" && (
                      <p className="p-2 hover:bg-white/10 cursor-pointer">
                        Edit
                      </p>
                    )}

                    <p className="p-2 hover:bg-white/10 cursor-pointer">
                      View
                    </p>

                    {role === "admin" && (
                      <p className="p-2 hover:bg-red-500/20 text-red-400 cursor-pointer">
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
                  : "bg-white/5 hover:bg-white/10"
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