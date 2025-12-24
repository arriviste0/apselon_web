import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Layers, Layers2, Layers3 } from 'lucide-react';

export type Product = {
  icon: React.ReactNode;
  slug: string;
  title: string;
  description: string;
  features: string[];
  badge: string | null;
  images: ImagePlaceholder[];
};

const findImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
      throw new Error(`Image with id "${id}" not found.`);
    }
    return img;
}

export const products: Product[] = [
  {
    icon: <Layers className="h-8 w-8 text-white" />,
    slug: 'single-layer-pcb',
    title: 'Single Layer PCB',
    description: 'Cost-effective and reliable, ideal for a variety of simple to medium complexity circuits.',
    features: ['Consumer Electronics', 'LED Lighting', 'Power Supplies', 'Automotive', 'Calculators', 'Printers'],
    badge: null,
    images: [
        findImage('single-layer-pcb-1'),
        findImage('single-layer-pcb-2'),
        findImage('single-layer-pcb-3'),
        findImage('double-layer-pcb-3'), // using as a generic electronics image
    ],
  },
  {
    icon: <Layers2 className="h-8 w-8 text-white" />,
    slug: 'double-layer-pcb',
    title: 'Double Layer PCB',
    description: 'Offers increased circuit density for more complex designs and applications.',
    features: ['Industrial Controls', 'Instrumentation', 'Communication Systems', 'HVAC', 'Medical Equipment', 'Amplifiers'],
    badge: null,
    images: [
        findImage('double-layer-pcb-1'),
        findImage('double-layer-pcb-2'),
        findImage('double-layer-pcb-3'),
        findImage('multi-layer-pcb-2'),
    ],
  },
  {
    icon: <Layers3 className="h-8 w-8 text-white" />,
    slug: 'multi-layer-pcb',
    title: 'Multilayer PCB',
    description: 'Compact structures for high-performance electronics where space and weight are critical.',
    features: ['Aerospace', 'Medical Devices', 'IoT Gadgets', 'High-speed circuits', 'Computers', 'Smartphones'],
    badge: 'Coming Soon',
    images: [
        findImage('multi-layer-pcb-1'),
        findImage('multi-layer-pcb-2'),
        findImage('multi-layer-pcb-3'),
        findImage('hero-pcb'),
    ],
  },
];
