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
    slug: 'single-side-pcb',
    title: 'Single Side PCB',
    description: 'Cost-effective and reliable, ideal for a variety of simple to medium complexity circuits.',
    features: ['Consumer Electronics', 'LED Lighting', 'Power Supplies', 'Automotive', 'Calculators', 'Printers'],
    badge: null,
    images: [
        { id: 'single-layer-1', description: 'Single layer PCB 1', imageUrl: '/Single Layer 1.JPG', imageHint: 'single layer pcb' },
        { id: 'single-layer-2', description: 'Single layer PCB 2', imageUrl: '/Single layer 2.JPG', imageHint: 'single layer pcb' },
        { id: 'single-layer-3', description: 'Single layer PCB 3', imageUrl: '/Single layer 3.JPG', imageHint: 'single layer pcb' },
        { id: 'single-layer-4', description: 'Single layer PCB 4', imageUrl: '/Single layer 4.JPG', imageHint: 'single layer pcb' },
    ],
  },
  {
    icon: <Layers2 className="h-8 w-8 text-white" />,
    slug: 'double-side-pcb',
    title: 'Double Side PCB',
    description: 'Offers increased circuit density for more complex designs and applications.',
    features: ['Industrial Controls', 'Instrumentation', 'Communication Systems', 'HVAC', 'Medical Equipment', 'Amplifiers'],
    badge: null,
    images: [
        { id: 'double-side-1', description: 'Double side PCB 1', imageUrl: '/DL 1.JPG', imageHint: 'double side pcb' },
        { id: 'double-side-2', description: 'Double side PCB 2', imageUrl: '/DL 2.JPG', imageHint: 'double side pcb' },
        { id: 'double-side-3', description: 'Double side PCB 3', imageUrl: '/DL 3.JPG', imageHint: 'double side pcb' },
        { id: 'double-side-4', description: 'Double side PCB 4', imageUrl: '/DL 4.JPG', imageHint: 'double side pcb' },
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
        { id: 'multi-layer-1', description: 'Multi Layer PCB 1', imageUrl: '/ML 1.JPG', imageHint: 'multi layer pcb' },
        { id: 'multi-layer-2', description: 'Multi Layer PCB 2', imageUrl: '/ML 2.JPG', imageHint: 'multi layer pcb' },
        { id: 'multi-layer-3', description: 'Multi Layer PCB 3', imageUrl: '/ML 3.JPG', imageHint: 'multi layer pcb' },
        { id: 'multi-layer-4', description: 'Multi Layer PCB 4', imageUrl: '/ML 4.JPG', imageHint: 'multi layer pcb' },
    ],
  },
];
