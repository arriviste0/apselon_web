"use client";

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { products } from '@/lib/products-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  const [mainImage, setMainImage] = useState(product?.images[0]);

  if (!product || !mainImage) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:underline font-medium animate-fade-in-up">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all products</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src={mainImage.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  data-ai-hint={mainImage.imageHint}
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={cn(
                      'relative aspect-square w-full overflow-hidden rounded-md border-2 transition-all duration-300 transform hover:scale-105',
                      mainImage.imageUrl === image.imageUrl ? 'border-primary shadow-md' : 'border-transparent hover:border-primary/50'
                    )}
                  >
                    <Image
                      src={image.imageUrl}
                      alt={`${product.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {product.badge && <Badge className="mb-2 bg-accent text-accent-foreground">{product.badge}</Badge>}
              <h1 className="text-4xl md:text-5xl font-bold">{product.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
              
              <Card className="mt-8 bg-secondary/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-primary">Common Applications</h3>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${300 + i * 50}ms` }}>
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-8">
                 <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 transition-transform duration-300 hover:scale-105">
                    <Link href="/contact">Request a Quote</Link>
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
