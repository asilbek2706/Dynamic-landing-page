'use client'

import { CarouselItem } from "@/shared/types/carousel-item.type";
import CarouselForm, { CarouselFormValues } from "../../form";
import { updateCarouselItem } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type editFormProps = {
    carouselItem: CarouselItem
}

export default function EditForm({ carouselItem }: editFormProps) {
    const router = useRouter();

    const handleUpdate = async (values: CarouselFormValues) => {
        const result = await updateCarouselItem(carouselItem.id, values);
        if (result.success) {
            toast.success("Carousel item updated", {
                description: "The carousel item has been updated successfully."
            });
            router.push('/dashboard/carousel');
        } else {
            toast.error("Error occured", {
                description: result.error
            });
        }
    }
    return <div>
        <CarouselForm onSubmit={handleUpdate} defaultValues={carouselItem} isEdit />
    </div>
}