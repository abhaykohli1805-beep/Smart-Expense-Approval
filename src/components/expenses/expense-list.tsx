"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExpenseItem from "./expense-item";
import type { Expense, ExpenseStatus } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { FileQuestion } from "lucide-react";

type ExpenseListProps = {
  initialExpenses: Expense[];
};

export default function ExpenseList({ initialExpenses }: ExpenseListProps) {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const handleUpdateStatus = async (id: string, status: ExpenseStatus) => {
    const originalExpenses = [...expenses];
    const expenseToUpdate = expenses.find((exp) => exp.id === id);

    if (!expenseToUpdate || expenseToUpdate.status === status) return;

    // Optimistic update
    const updatedExpenses = expenses.map((exp) =>
      exp.id === id ? { ...exp, status } : exp
    );
    setExpenses(updatedExpenses);
    setLoadingStates((prev) => ({ ...prev, [id]: true }));

    try {
      const response = await fetch('/api/expenses', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update expense');
      }

    } catch (error) {
      // Revert on failure
      setExpenses(originalExpenses);
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: `Could not update the expense. Please try again.`,
      });
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  if (expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 text-muted-foreground">
        <FileQuestion className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-semibold">No Expenses Found</h3>
        <p>There are no expense requests to review at this time.</p>
      </div>
    );
  }

  return (
    <div className="p-2 md:p-4">
      <ul className="space-y-3">
        <AnimatePresence>
          {expenses.map((expense) => (
            <motion.li
              key={expense.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ExpenseItem
                expense={expense}
                onUpdateStatus={handleUpdateStatus}
                isUpdating={loadingStates[expense.id] || false}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
