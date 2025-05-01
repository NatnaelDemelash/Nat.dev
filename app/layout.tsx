import type { Metadata } from 'next';
import './globals.css';

import { Darker_Grotesque } from 'next/font/google';

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-darker-grotesque',
  display: 'swap', // (better for performance)
});

export const metadata: Metadata = {
  title: 'NatiDev',
  description: 'A brand new portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${darkerGrotesque.variable}`}>
      <body>{children}</body>
    </html>
  );
}
