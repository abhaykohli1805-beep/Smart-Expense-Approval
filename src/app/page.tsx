
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="container mx-auto px-4 pt-12 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          Welcome to ExpenseFlow
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          A fresh starting point for your Next.js application. We've cleared out the previous functionality to give you a clean slate.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/dashboard">
                <Button size="lg">View Dashboard</Button>
            </Link>
            <Link href="/about">
                <Button variant="outline" size="lg">About Project</Button>
            </Link>
        </div>
      </div>

      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-base font-semibold leading-7 text-primary">
              Start Building
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to deploy your app
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              This project is a boilerplate demonstrating a modern web application stack. It's configured with Next.js, ShadCN UI, and Tailwind CSS. The previous authentication features have been removed to provide a clean foundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
