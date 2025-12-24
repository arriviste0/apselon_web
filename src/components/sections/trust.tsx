
"use client";

import {
  Rocket,
  Target,
  Cpu,
  BadgeDollarSign,
  ShieldCheck,
  HeartHandshake,
  Award,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import Image from 'next/image';

const trustPoints = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'Fast Delivery (24–72 hrs)',
    description:
      'Get your PCBs quickly with our expedited manufacturing and shipping process.',
    image: { imageUrl: '/why_apselon_1.jpg', description: 'Why Apselon 2', imageHint: 'trust reason' },
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'High Accuracy & Consistency',
    description:
      'Every board is produced with exacting precision for reliable performance.',
      image: { imageUrl: '/why_apselon_2.jpg', description: 'Why Apselon 1', imageHint: 'trust reason' },
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Advanced Machines & Automation',
    description:
      'Leveraging state-of-the-art technology for superior quality and efficiency.',
      image: { imageUrl: '/why_apselon_3.jpg', description: 'Why Apselon 3', imageHint: 'trust reason' },
  },
  {
    icon: <BadgeDollarSign className="h-8 w-8" />,
    title: 'Competitive Pricing',
    description: 'Top-tier quality at prices that keep your projects on budget.',
    image: { imageUrl: '/why_apselon_4.jpg', description: 'Why Apselon 4', imageHint: 'trust reason' },
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Strong QC & Inspection',
    description:
      'Rigorous testing at every stage to ensure flawless final products.',
      image: { imageUrl: '/why_apselon_5.jpg', description: 'Why Apselon 5', imageHint: 'trust reason' },
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: 'Dedicated Customer Support',
    description:
      'Our expert team is here to assist you from quoting to delivery.',
      image: { imageUrl: '/why_apselon_6.jpg', description: 'Why Apselon 6', imageHint: 'trust reason' },
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'OEM Trusted Supplier',
    description: 'The preferred partner for leading original equipment manufacturers.',
    image: { imageUrl: '/why_apselon_7.jpg', description: 'Why Apselon 6', imageHint: 'trust reason' },
  },
];


export function Trust() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const [activeCard, setActiveCard] = useState(0);

  const activeImage = useMemo(() => {
    const activeIndex = Math.round(scrollYProgress.get() * (trustPoints.length -1));
    return trustPoints[activeIndex]?.image;
  }, [activeCard]);

  scrollYProgress.on("change", (latest) => {
    const newActiveCard = Math.floor(latest * trustPoints.length);
    if (newActiveCard !== activeCard) {
      setActiveCard(newActiveCard);
    }
  });


  return (
    <section id="trust" ref={scrollRef} className="relative py-24 bg-secondary/30 h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-primary"
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    >
                        Why Customers Trust Apselon?
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-foreground/80"
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    >
                        We are committed to delivering excellence and reliability, which has
                        made us a trusted partner in the industry.
                    </motion.p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                         {trustPoints.map((point, index) => (
                           <motion.div
                             key={point.title}
                             className="absolute inset-0"
                             style={{
                                opacity: useTransform(scrollYProgress, 
                                  [(index / trustPoints.length) - 0.05, (index / trustPoints.length), (index / trustPoints.length) + 0.05], 
                                  [0, 1, 0]
                                ),
                             }}
                           >
                             <Image 
                                src={point.image.imageUrl}
                                alt={point.image.description}
                                fill
                                className="object-cover"
                                data-ai-hint={point.image.imageHint}
                            />
                           </motion.div>
                         ))}
                         <div className="absolute inset-0 bg-primary/10"/>
                    </div>
                    <div className="space-y-8 relative h-[500px]">
                        {trustPoints.map((point, index) => {
                             const stepProgress = useTransform(scrollYProgress, (pos) => {
                                const stepSize = 1 / trustPoints.length;
                                const currentStepStart = index * stepSize;
                                return (pos - currentStepStart) / stepSize;
                            });

                             const opacity = useTransform(stepProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
                             const translateY = useTransform(stepProgress, [0, 0.1], [30, 0]);
                            
                            return (
                                <motion.div 
                                    key={index} 
                                    style={{ opacity, y: translateY }}
                                    className="lg:absolute lg:inset-x-0"
                                >
                                    <Card className="bg-card/80 backdrop-blur-sm">
                                        <CardHeader className="flex-row items-center gap-4">
                                            <div className="bg-primary/10 text-primary p-3 rounded-lg">
                                                {point.icon}
                                            </div>
                                            <CardTitle>{point.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{point.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}