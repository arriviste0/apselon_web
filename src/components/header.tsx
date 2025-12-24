"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Zap } from 'lucide-react';

const navLinksLeft = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/contact', label: 'Contact' },
];

const navLinksRight: { href: string, label: string }[] = [];

const allNavLinks = [...navLinksLeft, ...navLinksRight];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="hidden md:flex flex-1 items-center justify-start gap-6">
          <nav className="flex items-center gap-6">
            {navLinksLeft.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl absolute left-4 md:left-1/2 md:-translate-x-1/2">
          <Zap className="h-6 w-6 text-primary" />
          <span>APSELON</span>
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          <nav className="flex items-center gap-6">
            {navLinksRight.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>


        <div className="flex items-center gap-4 md:hidden ml-auto">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setOpen(false)}>
                  <Zap className="h-6 w-6 text-primary" />
                  <span>APSELON</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {allNavLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium" onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setOpen(false)}>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
