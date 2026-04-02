#  FinancePro Dashboard

A modern, responsive finance dashboard built with React, Tailwind CSS, and Zustand.
Designed to showcase clean UI, real-world functionality, and scalable frontend architecture.

---

##  Features

###  Dashboard

* Balance overview (Income, Expenses, Total)
* Interactive charts (Line + Pie)
* Spending insights & analytics

###  Transactions

* Search transactions
* Filter by type (Income / Expense)
* Sort by date or amount
* Pagination support

###  Role-Based Access (RBAC)

* Admin vs Viewer toggle
* Admin can:

  * Export data
  * Edit/Delete transactions
* Viewer has limited access

###  Export

* Export transactions as:

  * CSV
  * JSON
* Toast notifications for feedback

###  UI/UX

* Fully responsive (Mobile + Desktop)
* Dark modern theme
* Smooth hover effects
* Loading & empty states
* Clean spacing & typography

---

## Tech Stack

* **React.js**
* **Tailwind CSS**
* **Zustand (State Management)**
* **Recharts (Charts)**
* **React Router**
* **React Hot Toast**

---

##  Project Structure

```
src/
 ├── components/
 │   ├── charts/
 │   ├── layout/
 │   ├── table/
 │   ├── ui/
 │   ├── states/
 │   └── export/
 ├── pages/
 ├── store/
 ├── hooks/
 ├── styles/
 └── utils/
```

---

##  Installation & Setup

```bash
# Clone repo
git clone <your-repo-link>

# Install dependencies
npm install

# Run project
npm run dev
```

---

##  State Management

Zustand is used for:

* Global transaction state
* Role management (Admin / Viewer)
* Filtered data logic

---

##  Key Highlights

* Clean and modular architecture
* Reusable UI components (Card, Button)
* Responsive layout using Tailwind
* Real-world dashboard interactions
* Attention to UX details

---

##  Screenshots





## Future Improvements

* Backend integration
* Authentication system
* Real-time data sync
* Advanced analytics

---

##  Author

**SUMAN SOURAV**

---

 If you like this project, feel free to star it!
