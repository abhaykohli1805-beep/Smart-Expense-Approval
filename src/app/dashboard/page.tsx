import ExpenseList from "@/components/expenses/expense-list";
import { expenses } from "@/lib/data";
import type { Expense } from "@/lib/types";

export default function DashboardPage() {
  const initialExpenses: Expense[] = JSON.parse(JSON.stringify(expenses));

  return (
    <div className="container mx-auto max-w-5xl py-8 px-4">
      <div className="w-full rounded-xl bg-card/50 backdrop-blur-xl border border-border/20 shadow-lg">
        <header className="p-6 border-b border-border/20">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Expense Requests</h1>
          <p className="text-muted-foreground mt-1">Review and manage expense requests.</p>
        </header>
        <main>
          <ExpenseList initialExpenses={initialExpenses} />
        </main>
      </div>
    </div>
  );
}
