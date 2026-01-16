
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LayoutTemplate, Rocket, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    name: 'Modern Stack',
    description: 'Built with Next.js, Tailwind CSS, and ShadCN UI for a high-performance, developer-friendly experience.',
    icon: Rocket,
  },
  {
    name: 'Streamlined Dashboard',
    description: 'An intuitive dashboard to manage and review expense requests with powerful filtering and search capabilities.',
    icon: LayoutTemplate,
  },
  {
    name: 'Clean Foundation',
    description: 'Stripped of complex boilerplate to provide a clean slate for building your own features.',
    icon: ShieldCheck,
  },
];

export default function WelcomePage() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Welcome to ExpenseFlow
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            A fresh starting point for your Next.js application, designed for rapid development.
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

        {/* Features Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
             <p className="text-base font-semibold leading-7 text-primary">
              Start Building
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to build your app
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              This project is a boilerplate demonstrating a modern web application stack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.name} className="p-6 bg-card/60 backdrop-blur-md transition-all duration-300 hover:bg-card/80 hover:shadow-xl hover:-translate-y-1 border border-border/10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full border-2 border-primary/20">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
