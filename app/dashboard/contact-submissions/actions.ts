'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export const updateContactSubmission = async (id: string, is_contacted: boolean) => {
    const supabase = await createClient();
    const { error } = await supabase.from('contact_form_submissions').update({ is_contacted }).eq('id', id);
    if (error) {
        return { success: false, error: error.message };
    }
    revalidatePath('/dashboard/contact_submissions');
    return { success: true };
};
