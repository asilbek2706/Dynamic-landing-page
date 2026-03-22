import { AboutForm } from './form';
import { createClient } from '@/lib/supabase/server';

export default async function AboutUsManagement() {
    const supabase = await createClient();
    const { data: aboutUs } = await supabase.from('about_us').select().single();
    return <AboutForm aboutUs={aboutUs} />;
}
