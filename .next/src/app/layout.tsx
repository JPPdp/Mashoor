// app/layout.tsx
import '../app/globals.css';
import { ReactNode } from 'react';
import { Navbar } from '../../components/Navbar';

export const metadata = {
  title: 'Mashoor Temu Clone',
  description: 'Inspired by Temu — language toggle, clean layout',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:text-white">
        <Navbar />
        <main className="max-w-screen-lg mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
