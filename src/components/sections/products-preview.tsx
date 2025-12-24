import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products-data';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function ProductsPreview() {
  return (
    <section id="products" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Products</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Delivering Quality, Precision, and Performance in every Printed Circuit Board.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-lg shadow-lg border"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Image
                src={product.images[0].imageUrl}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={product.images[0].imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
              
              <div className="absolute top-0 left-0 right-0 p-6 text-white">
                 <h3 className="text-xl font-bold">{product.title}</h3>
                 <p className="text-sm text-white/80 mt-1">{product.description.split(',')[0]}.</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <div className="flex items-center justify-between bg-white/90 text-black px-4 py-3 rounded-md font-semibold">
                      <span>View Details</span>
                      <ArrowRight className="h-5 w-5 ml-2" />
                  </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
              <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
