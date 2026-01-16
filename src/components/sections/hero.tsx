n"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/homepage_img.jpg"
        alt="Apselon Technology"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-left max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <p className="font-semibold text-lg md:text-xl text-accent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>APSELON TECHNOLOGY PVT. LTD.</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-2 mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Gujarat’s Leading PCB Manufacturer
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          High-quality, Made-in-India Printed Circuit Boards powering tomorrow’s technology. Founded in 2021.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6">
            <Link href="#contact">Request PCB Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white text-base px-8 py-6 transition-all duration-300">
            <Link href="#">
              <Download className="mr-2 h-5 w-5" />
              Download Capabilities Sheet
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
