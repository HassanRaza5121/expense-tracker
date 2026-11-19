export const categories  = [
    "Food",
    "Transport",
    "Bills",
    "Shopping",
    "Health",
    "Other",
] as const;

export type Category = (typeof categories)[number];
 
export interface Expense {
    id: string;
    title: string;
    amount: number;
    category: Category;
    date: string;
}