import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Poppins } from "next/font/google";
import ChatWidget from "@/components/global/chat-widget";

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
      className={cn("h-full", "antialiased", poppins.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
