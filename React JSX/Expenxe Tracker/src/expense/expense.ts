export interface Expense {
  id: string;
  title: string;
  amount: number|string;
  category: string;
  type: "income" | "expense";
  date: string;
}
