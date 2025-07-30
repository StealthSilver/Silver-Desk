import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Silver's Desk",
  description: "The place where creativity meets relevance",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        <div className="flex flex-col min-h-screen relative max-h-screen overflow-hidden pr-12">
          {/* Header includes navbar now */}
          <Header />

          {/* Main content taking the remaining space with scroll, but not exceeding viewport */}
          <main className="flex-grow max-w-4xl mx-auto px-6 py-6 overflow-auto">
            {children}
          </main>

          <Footer />

          {/* Colored sidebar area right of vertical line, hidden on mobile */}
          <div
            className="hidden md:block fixed top-0 bottom-0 right-0 w-[60px] bg-white dark:bg-black z-40"
            aria-hidden="true"
          />

          {/* Vertical line */}
          <div
            className="hidden md:block fixed top-0 bottom-0 right-[60px] w-[1px] z-50 border-r border-gray-600 dark:border-gray-400"
            aria-hidden="true"
          />

          {/* Theme toggle shown only on desktop, fixed top-right inside vertical line area */}
          <div className="hidden md:block fixed top-5 right-2 z-50">
            <ThemeToggle />
          </div>
        </div>
      </body>
    </html>
  );
}
