"use client";

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Layers, Layers3, Ruler, Scaling, CircuitBoard, MoveHorizontal, Drill, ShieldCheck } from 'lucide-react';

const capabilities = [
  { icon: <Layers />, label: 'Laminates', value: 'FR-4 Glass Epoxy' },
  { icon: <Layers3 />, label: 'PCB Types', value: 'Single, Double, Multilayer' },
  { icon: <Ruler />, label: 'Max Board Size', value: '430×580mm' },
  { icon: <Scaling />, label: 'Laminate Thickness', value: '0.4mm – 3.2mm' },
  { icon: <CircuitBoard />, label: 'Finished Copper', value: 'Up to 150µm' },
  { icon: <Layers />, label: 'Base Copper Foil', value: '18 / 35 / 70 µm' },
  { icon: <MoveHorizontal />, label: 'Min. Track/Spacing', value: '0.2 mm (8 mil)' },
  { icon: <Drill />, label: 'Min. Hole Size', value: '0.3 mm' },
];

const surfaceFinishes = ['HAL', 'Immersion', 'Lead-Free'];


export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Technical Capabilities"
          subtitle="Precision & Performance"
          description="Precision-engineered to meet the most demanding specifications, ensuring reliability and performance for your electronic designs."
        />
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto border rounded-lg shadow-lg bg-card overflow-hidden">
                <ul className="divide-y">
                    {capabilities.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between p-4 md:p-6 hover:bg-secondary/50 transition-colors duration-200 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center gap-4">
                                {React.cloneElement(item.icon, { className: "h-5 w-5 text-accent" })}
                                <span className="font-medium text-foreground/80 text-sm md:text-base">{item.label}</span>
                            </div>
                            <span className="font-bold text-foreground text-sm md:text-base text-right">{item.value}</span>
                        </li>
                    ))}
                    <li
                        className="p-4 md:p-6 animate-fade-in-up bg-card"
                        style={{ animationDelay: `${capabilities.length * 100}ms` }}
                    >
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <ShieldCheck className="h-5 w-5 text-accent" />
                                <span className="font-medium text-foreground/80 text-sm md:text-base">Surface Finish</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-foreground text-sm md:text-base">
                                    {surfaceFinishes.join(', ')}
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
