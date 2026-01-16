import { Badge } from "@/components/ui/badge";
import type { ExpenseStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

type ExpenseStatusBadgeProps = {
  status: ExpenseStatus;
};

const statusStyles: Record<ExpenseStatus, string> = {
  Pending: "bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30",
  Approved: "bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30",
  Rejected: "bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30",
};

export default function ExpenseStatusBadge({ status }: ExpenseStatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("w-24 justify-center py-1 font-semibold", statusStyles[status])}
    >
      {status}
    </Badge>
  );
}
