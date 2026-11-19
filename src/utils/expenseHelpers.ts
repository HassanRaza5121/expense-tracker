import type { Expense } from  "../types/expense";;


export function formatCurrency(amount:number): string{
    return new Intl.NumberFormat("en-PK",{
        style: "currency",
        currency: "PKR",
        maximumFractionDigits: 0,
        
    }).format(amount);
}

export function formatDate(isoDate: string): string{
    return new Date(isoDate). toLocaleString("en-GB",{
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    });
}

export function getTotal(expenses: Expense[]): number{
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}
