import { NextResponse } from 'next/server';
import { expenses } from '@/lib/data';
import type { Expense, ExpenseStatus } from '@/lib/types';

// In-memory data store
let expensesData: Expense[] = JSON.parse(JSON.stringify(expenses));

export async function GET() {
  return NextResponse.json(expensesData);
}

export async function PATCH(request: Request) {
  try {
    const { id, status }: { id: string; status: ExpenseStatus } = await request.json();

    if (!id || !status) {
      return NextResponse.json({ message: 'Missing id or status' }, { status: 400 });
    }

    const validStatuses: ExpenseStatus[] = ["Pending", "Approved", "Rejected"];
    if (!validStatuses.includes(status)) {
        return NextResponse.json({ message: 'Invalid status' }, { status: 400 });
    }

    let updatedExpense: Expense | undefined;

    expensesData = expensesData.map(expense => {
      if (expense.id === id) {
        updatedExpense = { ...expense, status };
        return updatedExpense;
      }
      return expense;
    });

    if (updatedExpense) {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return NextResponse.json(updatedExpense);
    } else {
      return NextResponse.json({ message: 'Expense not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
