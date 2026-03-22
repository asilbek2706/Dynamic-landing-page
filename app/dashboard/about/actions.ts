'use server';

import { AboutFormValues } from '@/app/dashboard/about/form';
import { createClient } from '@/lib/supabase/server';

export default async function updateAboutUs(aboutUs: AboutFormValues) {
    const supabase = await createClient();
    const { error } = await supabase.from('about_us').upsert({ id: 1, ...aboutUs });
    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}

export async function uploadImage(file: File | undefined) {
    const supabase = await createClient();
    const { data, error } = await supabase.storage.from('images').upload(`about_us-${Date.now()}.png`, file);
    if (error) {
        return { success: false, error: error.message };
    }
    const { data: imageUrl } = supabase.storage.from('images').getPublicUrl(`${data.path}`);
    return { success: true, imageUrl: imageUrl.publicUrl };
}
