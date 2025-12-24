
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  'Single, Double, & Multilayer PCBs',
  'FR-4 Glass Epoxy Laminates',
  'Up to 150 microns Finished Copper',
  'Minimum 0.3mm Hole Size',
  'HAL, Immersion & Lead-Free Finishes',
];

export function CapabilitiesPreview() {
  return (
    <section id="capabilities" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Technical Capabilities</h2>
            <p className="mt-4 text-lg text-foreground/80">
                Our state-of-the-art facility is equipped to handle a wide range of PCB manufacturing requirements, ensuring top quality and precision.
            </p>
             <ul className="mt-6 space-y-3">
                {highlights.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms`}}>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-foreground/90">{item}</span>
                    </li>
                ))}
             </ul>
            <Button asChild size="lg" className="mt-8 transition-transform duration-300 hover:scale-105">
                <Link href="/capabilities">See Full Specs</Link>
            </Button>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="overflow-hidden rounded-lg shadow-xl aspect-[4/3] relative">
              <Image 
                  src="/capabilities-preview.png" 
                  alt="PCB Manufacturing Process" 
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                  data-ai-hint="pcb manufacturing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
