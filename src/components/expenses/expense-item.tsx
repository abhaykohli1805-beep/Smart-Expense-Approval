import { Check, X } from "lucide-react";
import Image from "next/image";
import type { Expense, ExpenseStatus } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ExpenseStatusBadge from "./expense-status-badge";
import { Card } from "../ui/card";

type ExpenseItemProps = {
  expense: Expense;
  onUpdateStatus: (id: string, status: ExpenseStatus) => void;
  isUpdating: boolean;
};

export default function ExpenseItem({ expense, onUpdateStatus, isUpdating }: ExpenseItemProps) {
  const { id, employee, amount, category, date, status } = expense;
  
  const handleApprove = () => onUpdateStatus(id, "Approved");
  const handleReject = () => onUpdateStatus(id, "Rejected");

  return (
    <Card className="p-4 bg-card/60 backdrop-blur-md transition-all duration-300 hover:bg-card/80 hover:shadow-xl hover:-translate-y-1 border border-border/10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={employee.avatarUrl} alt={employee.name} data-ai-hint={employee.avatarHint} />
            <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <p className="font-semibold text-foreground">{employee.name}</p>
            <p className="text-sm text-muted-foreground">{category} - {date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6 ml-auto">
          <p className="text-xl font-bold text-foreground tabular-nums">
            ${amount.toFixed(2)}
          </p>
          <ExpenseStatusBadge status={status} />
          {status === "Pending" && (
            <div className="flex gap-2">
              <Button 
                variant="outline"
                size="icon"
                className="bg-green-100/10 border-green-500/30 text-green-400 hover:bg-green-500/20 hover:text-green-300"
                onClick={handleApprove}
                disabled={isUpdating}
                aria-label={`Approve expense from ${employee.name}`}
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-red-100/10 border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300"
                onClick={handleReject}
                disabled={isUpdating}
                aria-label={`Reject expense from ${employee.name}`}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
