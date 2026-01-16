import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function HelpPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Help & FAQs</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">How do I submit an expense?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Currently, the application is in manager-view only. The functionality for employees to submit expenses is under development.
            Managers can review, approve, or reject expenses submitted by employees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">How do I filter expenses?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            On the main dashboard, you'll find filter buttons for "Pending", "Approved", and "Rejected". Click on any of these to see only the expenses with that status. Click "All" to clear the filter. You can also use the search bar to find expenses by employee name.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">How do I sign out?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Click on your user email in the top-right corner of the header. A dropdown menu will appear with a "Log out" option. Click it to securely sign out of your account.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">Is my data secure?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes, we take data security very seriously. Your account is protected by Firebase Authentication, and all data is stored securely in Firestore with strict security rules to ensure that only authorized users can access the information.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
