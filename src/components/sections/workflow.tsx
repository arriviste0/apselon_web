import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Compass, ClipboardList, Search, Construction, Cog } from 'lucide-react';

const workflowSteps = [
  { icon: <Factory className="h-8 w-8" />, title: 'OEM' },
  { icon: <Compass className="h-8 w-8" />, title: 'Designing' },
  { icon: <ClipboardList className="h-8 w-8" />, title: 'Planning' },
  { icon: <Search className="h-8 w-8" />, title: 'Inventory Management' },
  { icon: <Construction className="h-8 w-8" />, title: 'Production' },
  { icon: <Cog className="h-8 w-8" />, title: 'Testing' },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative pt-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Innovation Workflow</h2>
          <p className="mt-4 text-lg text-foreground/80">
            From concept to creation, our streamlined process ensures quality and efficiency at every step. We leverage cutting-edge technology and meticulous planning to deliver superior PCB solutions.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Dotted line connecting the circles */}
            <div className="absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-0.5">
                <svg width="2" height="100%" className="h-full">
                    <line x1="1" y1="0" x2="1" y2="100%" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="8 8"/>
                </svg>
            </div>
            
            <div className="space-y-12">
              {workflowSteps.map((step, index) => (
                <div key={index} className={`flex items-center group animate-fade-in-up`} style={{ animationDelay: `${200 + index * 150}ms` }}>
                  {/* Left side content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                    <div className="inline-block p-4 rounded-lg bg-card shadow-md">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="w-2/12 order-2 flex justify-center">
                    <div className="z-10 bg-background p-2 rounded-full border-2 border-accent">
                      <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty div for spacing */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
