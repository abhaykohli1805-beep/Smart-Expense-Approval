
import Link from 'next/link';
import UserNav from '@/components/auth/user-nav';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, Mountain } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              ExpenseFlow
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="/help"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Help
            </Link>
          </nav>
        </div>
        
        <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 sm:max-w-xs">
                <Link
                  href="/"
                  className="flex items-center mb-6"
                >
                  <Mountain className="h-6 w-6 mr-2" />
                  <span className="font-bold">ExpenseFlow</span>
                </Link>
                <div className="flex flex-col space-y-3">
                  <Link href="/" className="text-lg font-medium">Home</Link>
                  <Link href="/about" className="text-lg font-medium text-muted-foreground">About</Link>
                  <Link href="/help" className="text-lg font-medium text-muted-foreground">Help</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        <div className="flex flex-1 items-center justify-end">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
