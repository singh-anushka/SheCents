import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Users, Eye, Heart,Loader2 } from "lucide-react"; // Replaced DollarSign with more relatable icons
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col items-center justify-center p-2 gap-8">
      {/* Row 1: Image and Smart Money Text */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        <div className="relative w-[250px] h-[250px] lg:w-[424px] lg:h-[424px]">
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
      {/* Row 2: Cards */}
      <div className="flex justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-6 shadow-md hover:bg-rose-100 transition-colors duration-300">
          <div className="text-xl font-semibold mb-2 flex items-center">
            {/* Relatable LucideReact Icon */}
            <Users className="w-8 h-8 text-primary mr-2" />
            Our Mission
          </div>
          <div className="text-neutral-600">
            <p>Empowering women through financial education for a future of independence and security.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg p-6 shadow-md hover:bg-rose-100 transition-colors duration-300">
          <div className="text-xl font-semibold mb-2 flex items-center">
            {/* Relatable LucideReact Icon */}
            <Eye className="w-8 h-8 text-primary mr-2" />
            Vision
          </div>
          <div className="text-neutral-600">
            <p>Every woman confidently making informed financial decisions, fostering a ripple effect of positive change.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg p-6 shadow-md hover:bg-rose-100 transition-colors duration-300">
          <div className="text-xl font-semibold mb-2 flex items-center">
            {/* Relatable LucideReact Icon */}
            <Heart className="w-8 h-8 text-primary mr-2" />
            Our Values
          </div>
          <div className="text-neutral-600">
            <p>Empowerment, Inclusivity, Integrity, Collaboration, Continuous Learning.</p>
          </div>
        </div>
      </div>
      <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center mb-4 flex px-0 py-10">
        Building Wealth, Empowering Women
      </h1>
      {/* Footer */}
      {/* Your footer content here */}
    </div>
  );
}
