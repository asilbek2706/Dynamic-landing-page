import ContactSubmissionsDataTable from '@/app/dashboard/contact-submissions/data-table';
import { createClient } from '@/lib/supabase/server';

export default async function ContactSubmissions() {
    const supabase = await createClient();
    const { data } = await supabase
        .from('contact_form_submissions')
        .select('*')
        .order('created_at', { ascending: true });
    return (
        <div>
            <h3 className={'mb-4 text-lg font-bold'}>Contact submissions management</h3>
            <ContactSubmissionsDataTable items={data} />
        </div>
    );
}
