import type { Metadata } from 'next';
import { Suspense } from 'react';
import RecoilContextProvider from '@/state/RecoilContextProvider';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Bungee_Shade, Advent_Pro } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';

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
  title: 'Nizhny Koin Kollection',
  description: 'Create 5-a-Side Fantsy Teams with Nizhny Koins',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <Suspense>
        <RecoilContextProvider>
          <body
            className={`${bungee.variable} ${advent.variable} bg-diamond-dark mt-5 p-5`}
          >
            <MantineProvider>{children}</MantineProvider>
          </body>
        </RecoilContextProvider>
      </Suspense>
    </html>
  );
}
