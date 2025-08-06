// app/layout.tsx
import '../app/globals.css';
import { ReactNode } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
export const metadata = {
  title: 'Mashoor Temu Clone',
  description: 'Inspired by Temu — language toggle, clean layout',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:text-white">
        <Navbar />
        <main className="max-w-screen-xl mx-auto px-4 py-6">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
