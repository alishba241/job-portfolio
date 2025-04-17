import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


import { Syne } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Optional
  variable: '--font-syne',
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alishba Naveed",
  description: "Alishba Naveed's Portfolio",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-syne`}
      >
        {children}
      </body>
    </html>
  );
}
