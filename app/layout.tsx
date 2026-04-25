import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aomi Polymarket Assistant",
  description: "AI-powered prediction market assistant built with Aomi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}