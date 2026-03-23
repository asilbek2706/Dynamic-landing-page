'use server';

import { ContactFormValues } from '@/components/contact-form';
import { createClient } from '@/lib/supabase/server';

export async function sendContactForm(values: ContactFormValues) {
    const supabase = await createClient();
    const { error } = await supabase.from('contact_form_submissions').insert(values);
    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}
