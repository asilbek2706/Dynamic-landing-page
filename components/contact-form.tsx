'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { FadeIn } from './fade-in';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
    first_name: z.string().min(2, {
        message: 'First name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters.',
    }),
});

export type ContactFormValues = z.infer<typeof formSchema>;

type ContactFormProps = {
    onSubmit: (values: ContactFormValues) => void;
    submitted: boolean;
};

export function ContactForm({ onSubmit, submitted }: ContactFormProps) {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: '',
            email: '',
            message: '',
        },
    });

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <FadeIn>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
                        <p className="text-muted-foreground max-w-700px md:text-xl">
                            Have questions? Get in touch with us.
                        </p>
                    </div>
                    {submitted ? (
                        <Card className={'mx-auto mt-4 max-w-md text-center'}>
                            <CardHeader>
                                <CardTitle>Thank you for contacting us!</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>We will get back to you as soon as possible.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="mx-auto mt-8 max-w-lg">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your first name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Enter your message" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    )}
                </div>
            </FadeIn>
        </section>
    );
}
