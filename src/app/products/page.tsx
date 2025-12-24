import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/page-header';
import { products } from '@/lib/products-data';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Our Products"
          subtitle="Quality, Precision, Performance"
          description="Delivering Quality, Precision, and Performance in every Printed Circuit Board we manufacture, tailored for a wide range of applications."
        />
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group relative block aspect-square w-full overflow-hidden rounded-lg shadow-lg border"
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
                    <p className="text-sm text-white/80 mt-1">{product.description}</p>
                    {product.badge && <Badge className="mt-2 bg-accent text-accent-foreground">{product.badge}</Badge>}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
