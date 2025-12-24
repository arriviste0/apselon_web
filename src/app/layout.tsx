import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingContact } from '@/components/floating-contact';

export const metadata: Metadata = {
  title: 'Apselon Technologies | Gujarat’s Leading PCB Manufacturer',
  description: 'High-quality, Made-in-India Printed Circuit Boards powering tomorrow’s technology. Single Layer, Double Layer, and Multilayer PCBs with advanced manufacturing and rapid delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <FloatingContact />
      </body>
    </html>
  );
}
