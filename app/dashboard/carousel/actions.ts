'use server'

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache";

export const deleteCarouselItem = async (id: number) => {
    const supabase = await createClient();
    const { error } = await supabase.from('carousel_items').delete().eq('id', id)
    if (error) {
        return { success: false, error: error.message }
    }
    revalidatePath('/dashboard/carousel')
    return { success: true }
}