import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const titiliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Visit Bali",
  description: "The best place to spend your holiday in Bali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#000000" },
      }}
    >
      <html lang="en">
        <body className={cn("antialiased", titiliumWeb.variable)}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
