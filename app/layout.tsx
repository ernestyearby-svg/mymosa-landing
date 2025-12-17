import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyMosa® — Pre-Orders',
  description: 'MyMosa® pre-orders for distributors, retailers, and on-premise partners.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
