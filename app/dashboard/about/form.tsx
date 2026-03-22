'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Textarea } from '@/components/ui/textarea';
import updateAboutUs, { uploadImage } from '@/app/dashboard/about/actions';
import { toast } from 'sonner';
import { Field, FieldLabel } from '@/components/ui/field';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { error } from 'next/dist/build/output/log';

const formSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(30).max(500),
    image_url: z.string().min(5).max(500).url(),
});

export type AboutFormValues = z.infer<typeof formSchema>;

type AboutFormProps = {
    aboutUs: AboutFormValues;
};

export function AboutForm({ aboutUs }: AboutFormProps) {
    const form = useForm<AboutFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: aboutUs || {
            title: '',
            description: '',
            image_url: '',
        },
    });

    async function onSubmit(values: AboutFormValues) {
        const { success, error } = await updateAboutUs(values);
        if (success) {
            toast.success('Successfully updated about us!');
        } else {
            toast.error('Error occured', {
                description: error,
            });
        }
    }

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const { success, error, imageUrl } = await uploadImage(file);
        if (success) {
            toast.success('Successfully uploaded image!');
            form.setValue('image_url', imageUrl!);
        } else {
            toast.error(error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormDescription>This is title of the about section</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Description" {...field} />
                            </FormControl>
                            <FormDescription>This is description of the about section</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="image_url"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image Url</FormLabel>
                                <FormControl>
                                    <Input placeholder="Image Url" {...field} disabled />
                                </FormControl>
                                <FormDescription>This is image URL of the about section</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Field>
                        <FieldLabel htmlFor="picture">Picture</FieldLabel>
                        <Input id="picture" type="file" onChange={handleImageChange} />
                        <Image src={aboutUs.image_url} alt="About Us" width={200} height={200} className="rounded-md" />
                    </Field>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Update</Button>
                </div>
            </form>
        </Form>
    );
}
