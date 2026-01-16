export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">About ExpenseFlow</h1>
      <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
        <p>
          ExpenseFlow is a modern, streamlined application designed to simplify the process of expense reporting and approval.
          Our goal is to provide an intuitive and efficient platform for both employees and managers.
        </p>
        <p>
          Built with the latest technologies, including Next.js, Firebase, and ShadCN UI, ExpenseFlow offers a fast, responsive,
          and secure user experience. We believe that managing expenses shouldn't be a chore, and our smart UI is designed to
          make the process as painless as possible.
        </p>
        <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
        <p>
          Our mission is to empower organizations to manage their finances with clarity and ease. By automating and simplifying
          the expense approval workflow, we help businesses save time, reduce administrative overhead, and gain better insights
          into their spending.
        </p>
      </div>
    </div>
  );
}
