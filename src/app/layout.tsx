import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'استراحة LAN',
  description: 'خادم الوسائط المحلي للشبكة',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
