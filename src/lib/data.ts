import type { Expense } from "./types";
import { PlaceHolderImages } from "./placeholder-images";

const formatDate = (date: Date) => date.toISOString().split('T')[0];

export let expenses: Expense[] = [
  {
    id: "exp_001",
    employee: {
      name: "Alex Johnson",
      avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar1')?.imageUrl || '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'avatar1')?.imageHint || ''
    },
    amount: 150.75,
    category: "Travel",
    date: formatDate(new Date("2024-07-20")),
    status: "Pending",
  },
  {
    id: "exp_002",
    employee: {
      name: "Maria Garcia",
      avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar2')?.imageUrl || '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'avatar2')?.imageHint || ''
    },
    amount: 34.50,
    category: "Office Supplies",
    date: formatDate(new Date("2024-07-18")),
    status: "Approved",
  },
  {
    id: "exp_003",
    employee: {
      name: "James Smith",
      avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar3')?.imageUrl || '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'avatar3')?.imageHint || ''
    },
    amount: 500.00,
    category: "Software Subscription",
    date: formatDate(new Date("2024-07-15")),
    status: "Pending",
  },
  {
    id: "exp_004",
    employee: {
      name: "Patricia Williams",
      avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar4')?.imageUrl || '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'avatar4')?.imageHint || ''
    },
    amount: 88.00,
    category: "Team Lunch",
    date: formatDate(new Date("2024-07-12")),
    status: "Rejected",
  },
  {
    id: "exp_005",
    employee: {
      name: "Robert Brown",
      avatarUrl: PlaceHolderImages.find(img => img.id === 'avatar1')?.imageUrl || '',
      avatarHint: PlaceHolderImages.find(img => img.id === 'avatar1')?.imageHint || ''
    },
    amount: 1200.00,
    category: "Marketing Campaign",
    date: formatDate(new Date("2024-07-10")),
    status: "Approved",
  },
];
