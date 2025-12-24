"use client";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Truck, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'Advanced Manufacturing',
    description: 'Utilizing state-of-the-art machinery for precision and efficiency in every board we produce.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Rapid & Reliable Delivery',
    description: 'Our streamlined processes ensure you get reliable quality PCBs, delivered on time, every time.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Continuous Innovation',
    description: 'We are committed to R&D, constantly improving our capabilities to meet future technological demands.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Customer-Centric Team',
    description: 'Our skilled team is dedicated to providing exceptional service and support for all your needs.',
  },
];

const leadership = [
  { name: 'Hitesh Patel', role: 'Director', imageUrl: '/Hitesh Patel - Director Photo.jpg', imageHint: 'male portrait' },
  { name: 'Vasant Patel', role: 'Director', imageUrl: '/Vasant Patel - Director Photo.jpg', imageHint: 'male portrait' },
  { name: 'Suresh Patel', role: 'Admin Head', imageUrl: '/Admin_Head_Photo.HEIC', imageHint: 'male portrait' },
];

const facilityImages = [
    PlaceHolderImages.find(p => p.id === 'facility-1'),
    PlaceHolderImages.find(p => p.id === 'facility-2'),
    PlaceHolderImages.find(p => p.id === 'facility-3'),
    PlaceHolderImages.find(p => p.id === 'facility-4'),
].filter(Boolean) as {id: string, description: string, imageUrl: string, imageHint: string}[];


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white overflow-hidden">
            <video
                src="/apselon_intro.mp4"
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center animate-fade-in-up">
                <p className="font-semibold text-lg text-accent">Precision Engineering & Innovation</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-2">About Apselon Technology</h1>
                <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
                    Founded in 2021, Apselon has rapidly grown into a symbol of precision engineering and innovation. Our mission is to bring high-quality PCB manufacturing to India, meeting global standards of excellence.
                </p>
            </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Our Facility</h3>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Our modern manufacturing unit is equipped with solar power, reflecting our commitment to sustainable and green energy practices.
                </p>
                <div className="mt-8 max-w-5xl mx-auto">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {facilityImages.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:inline-flex" />
                        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:inline-flex" />
                    </Carousel>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Our Leadership</h3>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {leadership.map((person, index) => (
                        <Card key={index} className="overflow-hidden animate-fade-in-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
                            <CardContent className="p-6 text-center">
                                <div className="relative mx-auto h-36 w-36 mb-4">
                                  <Image
                                    src={person.imageUrl}
                                    alt={`Portrait of ${person.name}`}
                                    className="rounded-full"
                                    width={200}
                                    height={200}
                                    objectFit="cover"
                                    data-ai-hint={person.imageHint}
                                  />
                                </div>
                                <h4 className="font-semibold text-lg">{person.name}</h4>
                                <p className="text-primary">{person.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="pt-16 md:pt-24 text-center">
                  <Badge variant="secondary" className="text-lg px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    Made in India, Made for the Future
                  </Badge>
                </div>
            </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
