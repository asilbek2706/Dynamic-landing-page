'use server'

import { createClient } from "@/lib/supabase/server";
import { CarouselFormValues } from "../../form";

export async function updateCarouselItem(id: number, values: CarouselFormValues) {
    const supabase = await createClient();
    const { error } = await supabase.from('carousel_items').update(values).eq('id', id)
    if (error) {
        return { success: false, error: error.message }
    }
    return { success: true }
}