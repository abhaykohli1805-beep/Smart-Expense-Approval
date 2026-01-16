import AnimatedBackground from "@/components/background/animated-background";
import ExpenseList from "@/components/expenses/expense-list";
import { expenses } from "@/lib/data";
import type { Expense } from "@/lib/types";

export default function Home() {
  const initialExpenses: Expense[] = JSON.parse(JSON.stringify(expenses));

  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
        <div className="w-full max-w-4xl rounded-xl bg-card/30 backdrop-blur-lg border border-border/20 shadow-lg">
          <header className="p-6 border-b border-border/20">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">ExpenseFlow</h1>
            <p className="text-muted-foreground mt-1">Review and manage expense requests.</p>
          </header>
          <main>
            <ExpenseList initialExpenses={initialExpenses} />
          </main>
        </div>
      </div>
    </>
  );
}
