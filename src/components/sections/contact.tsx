"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
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
        <section id="contact" className="bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Get a Quote</h2>
                        <p className="mt-4 text-lg text-foreground/80">
                            Have a project in mind? Fill out the form and our team will get back to you promptly to discuss your requirements.
                        </p>
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
                                    <FormField control={form.control} name="message" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl><Textarea placeholder="Tell us about your project requirements..." rows={4} {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                                        {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Request'}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
