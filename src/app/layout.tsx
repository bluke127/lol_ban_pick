import PopupComp from '@/components/Popup';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '롤밴픽',
  description: 'Generated by create 롤벤픽',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PopupComp />
      </body>
    </html>
  );
}
