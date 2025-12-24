type PageHeaderProps = {
  title: string;
  subtitle: string;
  description: string;
}

export function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-up">
        <p className="font-semibold text-lg text-primary">{subtitle}</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-accent">{title}</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
