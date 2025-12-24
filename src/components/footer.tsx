import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left order-2 md:order-1 flex-1">
            &copy; {currentYear} Apselon Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 order-1 md:order-2">
            <Image src="/apselon_logo.PNG" alt="Apselon Logo" width={64} height={64} className="h-16 w-auto" />
          </div>
          <div className="flex gap-4 order-3 md:order-3 flex-1 justify-end">
            <Link href="/about" className="text-sm hover:underline">About</Link>
            <Link href="/products" className="text-sm hover:underline">Products</Link>
            <Link href="/contact" className="text-sm hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
