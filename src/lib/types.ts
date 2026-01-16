export type ExpenseStatus = "Pending" | "Approved" | "Rejected";

export interface Expense {
  id: string;
  employee: {
    name: string;
    avatarUrl: string;
    avatarHint: string;
  };
  amount: number;
  category: string;
  date: string;
  status: ExpenseStatus;
}
