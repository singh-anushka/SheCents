import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font
import { ExitModal } from "@/components/modals/exit-modal";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config";
import "./globals.css";
import { HeartsModal } from "@/components/modals/hearts-model";
import { PracticeModal } from "@/components/modals/practice-model";

// Configure Poppins font with desired subsets and weights
const font = Poppins({ subsets: ["latin"], weight: ['600'] });

export const viewport: Viewport = {
  themeColor: "#22C55E",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/favicon.ico",
        },
        variables: {
          colorPrimary: "#22C55E",
        },
      }}
    >
      <html lang="en">
        {/* Apply Poppins font to body */}
        <body className={font.className}>
          <Toaster theme="light" richColors closeButton />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
