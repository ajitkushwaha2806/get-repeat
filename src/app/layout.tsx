import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Get Repeat",
  description: "Get Repeat App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
