import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { Footer } from '@/components/footer';
import { AboutPreview } from '@/components/sections/about-preview';
import { ProductsPreview } from '@/components/sections/products-preview';
import { CapabilitiesPreview } from '@/components/sections/capabilities-preview';
import { ContactSection } from '@/components/sections/contact';
import { Workflow } from '@/components/sections/workflow';
import { Trust } from '@/components/sections/trust';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutPreview />
        <div className="relative bg-background">
          <div className="absolute inset-0 bg-[url('/circuit-bg.svg')] bg-repeat opacity-5" />
          <Workflow />
        </div>
        <ProductsPreview />
        <Trust />
        <CapabilitiesPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
