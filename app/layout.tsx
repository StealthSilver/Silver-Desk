import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

export const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Silver's Desk",
  description: "The place where creativity meets relevence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-black min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
