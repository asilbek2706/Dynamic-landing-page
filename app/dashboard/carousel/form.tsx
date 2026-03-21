"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    title: z.string().min(2).max(30),
    description: z.string().min(30).max(150),
    cta_text: z.string().min(2).max(50),
    cta_link: z.string().min(2).max(50).url()
})

export default function CarouselForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            cta_text: "",
            cta_link: "",
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormDescription>This is the title of carousel item.</FormDescription>
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
                                <Input placeholder="Description" {...field} />
                            </FormControl>
                            <FormDescription>This is the description of carousel item.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cta_text"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>CTA Text</FormLabel>
                            <FormControl>
                                <Input placeholder="CTA Text" {...field} />
                            </FormControl>
                            <FormDescription>This is the text of the CTA button.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cta_link"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>CTA Link</FormLabel>
                            <FormControl>
                                <Input placeholder="CTA Link" {...field} />
                            </FormControl>
                            <FormDescription>This is the link of the CTA button.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}