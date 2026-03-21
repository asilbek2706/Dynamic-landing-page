'use client';

import { useRouter } from "next/navigation";
import CarouselForm, { CarouselFormValues } from "../form";
import { createCarouselItems } from "./actions";
import { toast } from "sonner";

export default function CreateForm() {
    const router = useRouter();
    const handleCreate = async (values: CarouselFormValues) => {
        const result = await createCarouselItems(values)
        if (result.success) {
            toast.success("Carousel item created", {
                description: "The carousel item has been created successfully."
            });
            router.push('/dashboard/carousel');
        } else {
            toast.error("Error occured", {
                description: result.error
            });
        }
    }

    return <CarouselForm onSubmit={handleCreate} />
}