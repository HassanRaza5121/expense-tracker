import type { Expense} from "../types/expense";
// Fictional sample data. ": Expense[]" means every item must match the Expense shape.
// DAY 3 RECAP: this is only the STARTING value. Later, the real list will live in state.
export const initialExpenses: Expense[] = [
  { id: "1", title: "Groceries", amount: 4500, category: "Food", date: "2026-11-10" },
  { id: "2", title: "Bus pass", amount: 2000, category: "Transport", date: "2026-11-11" },
  { id: "3", title: "Electricity bill", amount: 8200, category: "Bills", date: "2026-11-12" },
  { id: "4", title: "New headphones", amount: 6500, category: "Shopping", date: "2026-11-14" },
  { id: "5", title: "Pharmacy", amount: 1200, category: "Health", date: "2026-11-15" },
  { id: "6", title: "Lunch with friends", amount: 3000, category: "Food", date: "2026-11-17" },
];