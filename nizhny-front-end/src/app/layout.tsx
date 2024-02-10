import type { Metadata } from 'next';
import { Bungee_Shade, Advent_Pro } from 'next/font/google';
import './globals.css';

const bungee = Bungee_Shade({
  weight: '400',
  variable: '--font-bungee',
  subsets: ['latin'],
});
const advent = Advent_Pro({
  weight: '400',
  variable: '--font-advent',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bungee.variable} ${advent.variable}`}>
        {children}
      </body>
    </html>
  );
}
