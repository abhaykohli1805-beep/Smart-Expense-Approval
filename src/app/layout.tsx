import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'ExpenseFlow',
  description: 'Smart Expense Approval UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="antialiased bg-background">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20%] translate-y-[20%] rounded-full bg-primary/20 opacity-50 blur-[120px]"></div>
            <div className="absolute bottom-0 right-auto left-0 top-auto h-[500px] w-[500px] translate-x-[20%] -translate-y-[20%] rounded-full bg-accent/20 opacity-50 blur-[120px]"></div>
          </div>
          <div className="relative z-10 flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Toaster />
      </body>
    </html>
  );
}
