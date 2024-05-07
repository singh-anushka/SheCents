import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 px-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="budgeting.svg"
            alt="Budgeting"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Budgeting
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="savings.svg"
            alt="Savings"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
        
      Savings
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="investment.svg"
            alt="Investment"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Investment
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="debt.svg"
            alt="Debt"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
      Debt Management
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="retirement.svg"
            alt="Retirement"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Retirement
        </Button>
      </div>
    </footer>
  );
};
