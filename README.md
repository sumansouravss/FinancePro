#  Finance Dashboard UI

##  Overview

FinancePro is a modern, responsive finance dashboard built to help users track and understand their financial activity.
It provides a clean interface to visualize income, expenses, and spending patterns, along with interactive transaction management.

The project focuses on **UI/UX quality, state management, and frontend architecture**, simulating real-world dashboard behavior without backend dependency.

---

##  Features

###  Dashboard

* Summary cards (Total Balance, Income, Expenses)
* Time-based visualization (Balance trend using Recharts)
* Category-based visualization (Spending breakdown pie chart)

###  Transactions

* View transaction list (date, amount, category, type)
* Search, filter, and sorting
* Pagination support
* Edit & Delete (Admin only)

###  Role-Based UI (RBAC Simulation)

* Viewer → Read-only access
* Admin → Can edit/delete transactions
* Toggle between roles dynamically

###  Insights

* Top spending category
* Monthly comparison
* Smart financial observations

###  UI Enhancements

* Dark / Light mode toggle
* Fully responsive (mobile → desktop)
* Empty states handling
* Loading states (3D animated loader)

###  Export

* Export transactions as:

  * CSV
  * JSON

###  Micro Interactions

* Hover animations
* Card elevation effects
* Smooth transitions
* Interactive UI feedback

---

##  Tech Stack

* **React.js** – UI framework
* **Tailwind CSS** – Styling
* **Zustand** – State management
* **Recharts** – Data visualization
* **React Router** – Routing
* **React Hot Toast** – Notifications

---

##  Setup Instructions

```bash
# Clone repository
git clone <your-repo-link>

# Install dependencies
npm install

# Run project
npm run dev
```

---

##  Project Architecture

```
src/
├── components/
│   ├── charts/        → Charts (Line, Pie, Insights)
│   ├── table/         → Transactions table
│   ├── layout/        → Header, Sidebar
│   ├── ui/            → Reusable UI components
│   ├── states/        → Loading, Empty, Error states
│   └── export/        → CSV/JSON utilities
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   └── Insights.jsx
│
├── store/
│   └── useStore.js    → Zustand global state
│
├── styles/
│   └── index.css      → Theme + animations
│
├── hooks/             → Custom hooks
└── App.jsx
```

---

##  Approach

The project is designed with a focus on:

### 1. Simplicity & Clarity

Instead of over-engineering, the UI is structured to be intuitive and easy to use.

### 2. Component Reusability

Reusable components (Button, Card, Input, etc.) ensure scalability and maintainability.

### 3. State Management

Zustand is used for:

* Transactions data
* Filters
* Role handling
* Theme control

### 4. UX First Thinking

Special attention was given to:

* Smooth interactions
* Visual feedback
* Loading and empty states
* Responsive layouts

### 5. Real Product Feel

Enhancements like:

* 3D loader
* Micro-interactions
* Export functionality
  make the app feel closer to a real SaaS product.

---

##  Screenshots

## 📸 Screenshots

### 🏠 Dashboard
![Dashboard](./src/assets/Finance%20Dashboard%20Dark%20Mode.png)

### 💸 Transactions
![Transactions](./src/assets/transaction%20page.png)

### 📊 Insights
![Insights](./src/assets/Insights%20page.png)

### 🌙 Dark Mode
![Dark Mode](./src/assets/light%20mode%20dashboard.png)

### 📱 Mobile View
![Mobile](./src/assets/mobile%20view.png)
---

##  Live Demo & Repository

*  Live Demo: <your-deployment-link>
*  GitHub Repo: 

---

##  Conclusion

This project demonstrates the ability to:

* Design clean and intuitive UIs
* Structure scalable frontend applications
* Handle state effectively
* Focus on user experience and detail

It reflects a practical approach to building real-world dashboard interfaces.

---
