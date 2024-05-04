import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col items-center justify-center p-4 gap-8">
      {/* Row 1: Image and Smart Money Text */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px]">
          <Image src="/hero.svg" alt="Hero" fill />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center mb-4">
            Smart Money Moves for Women, by Women
          </h1>
          <ClerkLoading>
            <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  afterSignInUrl="/learn"
                  afterSignUpUrl="/"
                >
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton
                  mode="modal"
                  afterSignInUrl="/learn"
                  afterSignUpUrl="/"
                >
                  <Button
                    size="lg"
                    variant="primaryOutline"
                    className="w-full"
                  >
                    I already have an account
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <Link href="/learn">Continued Learning</Link>
                </Button>
              </SignedIn>
            </div>
          </ClerkLoaded>
        </div>
      </div>
      <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center mb-4">
        Key Features
          </h1>
      {/* Row 2: Sections */}
      <div className="flex flex-col items-center gap-y-8 w-full">
        <div className="bg-gray-100 p-6 rounded-lg w-full">
          <h2 className="text-lg font-semibold text-neutral-700 mb-2">Budgeting Basics</h2>
          <p className="text-sm text-neutral-600">
            Learn how to create and stick to a budget that works for you.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg w-full">
          <h2 className="text-lg font-semibold text-neutral-700 mb-2">Investing Insights</h2>
          <p className="text-sm text-neutral-600">
            Discover tips and strategies for starting and growing your investment portfolio.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg w-full">
          <h2 className="text-lg font-semibold text-neutral-700 mb-2">Debt Management</h2>
          <p className="text-sm text-neutral-600">
            Get expert advice on managing and reducing debt effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
