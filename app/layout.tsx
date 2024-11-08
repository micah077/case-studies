import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components";

const poppins =  Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Strugbits",
  description: "Created by Strugbits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
