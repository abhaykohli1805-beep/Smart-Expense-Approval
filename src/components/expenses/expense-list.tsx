
"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExpenseItem from "./expense-item";
import type { Expense, ExpenseStatus } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { FileQuestion, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ExpenseListProps = {
  initialExpenses: Expense[];
};

type FilterStatus = ExpenseStatus | "All";

export default function ExpenseList({ initialExpenses }: ExpenseListProps) {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<FilterStatus>("All");
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredExpenses = useMemo(() => {
    return expenses
      .filter((expense) => {
        if (filter === "All") return true;
        return expense.status === filter;
      })
      .filter((expense) => {
        if (searchTerm === "") return true;
        return expense.employee.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [expenses, filter, searchTerm]);


  return (
    <>
      <div className="p-4 flex flex-col md:flex-row gap-4 border-b border-border/20">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by employee name..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {(['All', 'Pending', 'Approved', 'Rejected'] as FilterStatus[]).map(status => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              onClick={() => setFilter(status)}
              className="shrink-0"
            >
              {status}
            </Button>
          ))}
        </div>
      </div>
      <div className="p-2 md:p-4">
        {filteredExpenses.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-12 text-muted-foreground">
            <FileQuestion className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">No Expenses Found</h3>
            <p>
              {searchTerm || filter !== 'All' 
                ? "Try adjusting your search or filter criteria."
                : "There are no expense requests to review at this time."}
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            <AnimatePresence>
              {filteredExpenses.map((expense) => (
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
        )}
      </div>
    </>
  );
}
