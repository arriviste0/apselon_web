"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react';

const contactInfo = [
    { icon: <Phone className="h-6 w-6 text-primary" />, info: "+91 78618 11970 / +91 98257 53444", label: "Phone" },
    { icon: <Mail className="h-6 w-6 text-primary" />, info: "apseloninfo@gmail.com", label: "Email" },
    { icon: <MapPin className="h-6 w-6 text-primary" />, info: "Apselon Survey No 123/001, Dahegam-Bayad Road, Sampa-Lavad Road, Village-Sujana Muvada, Ta. Dahegam, Dist. Gandhinagar-382315", label: "Address" },
    { icon: <Clock className="h-6 w-6 text-primary" />, info: "Mon - Sat: 9:00 AM - 7:00 PM", label: "Office Hours" },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong');
            }

            toast({
                title: "Success!",
                description: "Your message has been sent. We'll get back to you soon.",
            });
            form.reset();
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: errorMessage,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-1">
            <PageHeader
              title="Contact Us"
              subtitle="Get in Touch"
              description="We're always ready to help with your PCB requirements. Reach out to us with your questions or for a quote."
            />
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            {contactInfo.map((item, index) => (
                               <div key={index} className="flex items-start gap-4">
                                    <div className="bg-primary/10 rounded-full p-3">{item.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.label}</h3>
                                        <p className="text-muted-foreground">{item.info}</p>
                                    </div>
                               </div>
                            ))}
                        </div>

                        <Card className="animate-fade-in-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '450ms' }}>
                            <CardContent className="p-6 md:p-8">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                          <FormField control={form.control} name="name" render={({ field }) => (
                                              <FormItem>
                                                  <FormLabel>Name</FormLabel>
                                                  <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                                  <FormMessage />
                                              </FormItem>
                                          )} />
                                          <FormField control={form.control} name="email" render={({ field }) => (
                                              <FormItem>
                                                  <FormLabel>Email</FormLabel>
                                                  <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                                                  <FormMessage />
                                              </FormItem>
                                          )} />
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                          <FormField control={form.control} name="phone" render={({ field }) => (
                                              <FormItem>
                                                  <FormLabel>Phone (Optional)</FormLabel>
                                                  <FormControl><Input placeholder="+1 234 567 890" {...field} /></FormControl>
                                                  <FormMessage />
                                              </FormItem>
                                          )} />
                                          <FormField control={form.control} name="company" render={({ field }) => (
                                              <FormItem>
                                                  <FormLabel>Company (Optional)</FormLabel>
                                                  <FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl>
                                                  <FormMessage />
                                              </FormItem>
                                          )} />
                                        </div>
                                        <FormField control={form.control} name="message" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl><Textarea placeholder="Tell us about your project..." rows={5} {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                                            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Message'}
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
          </main>
          <Footer />
        </div>
    );
}
