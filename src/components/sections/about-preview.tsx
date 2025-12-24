import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cpu, Truck, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'Advanced Manufacturing',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Rapid & Reliable Delivery',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Continuous Innovation',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Customer-Centric Team',
  },
];

export function AboutPreview() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">About Apselon Technology</h2>
                <p className="mt-4 text-lg text-foreground/80">
                    Founded in 2021, Apselon has rapidly grown into a symbol of precision engineering and innovation. Our mission is to bring high-quality PCB manufacturing to India, meeting global standards of excellence.
                </p>
                <Button asChild size="lg" className="mt-6 transition-transform duration-300 hover:scale-105">
                    <Link href="/about">Learn More</Link>
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-3 text-base font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
