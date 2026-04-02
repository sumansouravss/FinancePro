import { create } from "zustand";

export const useStore = create((set, get) => ({
  // 🌗 THEME (PERSISTED)
  theme: localStorage.getItem("theme") || "dark",

  // 👤 ROLE (RBAC)
  role: "admin",

  // 📊 TRANSACTIONS
  transactions: [
    {
      id: 1,
      date: "12 Jun 2026",
      amount: 1200,
      category: "Groceries",
      type: "expense",
    },
    {
      id: 2,
      date: "10 Jun 2026",
      amount: 15000,
      category: "Salary",
      type: "income",
    },
  ],

  // 🔍 FILTER
  filter: "all",

  // 🌗 TOGGLE THEME (SAVE + APPLY)
  toggleTheme: () =>
    set((s) => {
      const newTheme = s.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),

  // 👤 ROLE SWITCH
  toggleRole: () =>
    set((s) => ({
      role: s.role === "admin" ? "viewer" : "admin",
    })),

  // ➕ ADD TRANSACTION
  addTransaction: (tx) =>
    set((s) => ({
      transactions: [...s.transactions, { ...tx, id: Date.now() }],
    })),

    // DELETE TRANSACTION
    deleteTransaction: (id) =>
  set((s) => ({
    transactions: s.transactions.filter((t) => t.id !== id),
  })),

updateTransaction: (updatedTx) =>
  set((s) => ({
    transactions: s.transactions.map((t) =>
      t.id === updatedTx.id ? updatedTx : t
    ),
  })),

  // 🔍 SET FILTER
  setFilter: (filter) => set({ filter }),

  // 📌 FILTERED DATA
  filteredTransactions: () => {
    const { transactions, filter } = get();

    if (filter === "income") {
      return transactions.filter((t) => t.type === "income");
    }

    if (filter === "expense") {
      return transactions.filter((t) => t.type === "expense");
    }

    return transactions;
  },
}));