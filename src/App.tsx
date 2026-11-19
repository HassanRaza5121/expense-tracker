import { initialExpenses } from "./data/expenses"; // the starting data
import { formatCurrency, formatDate, getTotal } from "./utils/expenseHelpers"; // our helpers

function App() {
  // DAY 3 RECAP: a DERIVED value. We calculate it from the data on every render.
  const total = getTotal(initialExpenses);

  return (
    // mx-auto centers the column, max-w-2xl limits its width, p-6 adds padding
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>

      {/* {...} runs JavaScript inside JSX. formatCurrency turns 26400 into "PKR 26,400" */}
      <p className="mt-1 text-slate-600">
        Total spent: <strong>{formatCurrency(total)}</strong>
      </p>

      {/* divide-y puts a line between rows; rounded-lg and border draw the outer box */}
      <ul className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-300">
        {/* DAY 4 RECAP: .map() turns each expense object into one <li> */}
        {initialExpenses.map((expense) => (
          // key must be unique and stable, so we use the expense id
          <li key={expense.id} className="flex items-center justify-between gap-4 p-3">
            <div>
              <p className="font-medium">{expense.title}</p>
              <p className="text-xs text-slate-500">
                {expense.category} · {formatDate(expense.date)}
              </p>
            </div>
            <p className="font-semibold">{formatCurrency(expense.amount)}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;