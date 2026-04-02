import { create } from "zustand";


export const useStore = create((set, get) => ({
  // 🌗 THEME
  theme: "dark",

  // 👤 ROLE (RBAC)
  role: "admin",

  // 📊 TRANSACTIONS (with default data)
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

  // 🔍 FILTER STATE
  filter: "all",

  // 🌗 TOGGLE THEME
  toggleTheme: () =>
    set((s) => ({
      theme: s.theme === "dark" ? "light" : "dark",

    })),

    
  // 👤 TOGGLE ROLE
  toggleRole: () =>
    set((s) => ({
      role: s.role === "admin" ? "viewer" : "admin",
    })),

  // ➕ ADD TRANSACTION
  addTransaction: (tx) =>
    set((s) => ({
      transactions: [...s.transactions, { ...tx, id: Date.now() }],
    })),

  // 🔍 SET FILTER
  setFilter: (filter) => set({ filter }),

  // 📌 FILTERED DATA (IMPORTANT)
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