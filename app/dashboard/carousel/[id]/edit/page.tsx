import { createClient } from "@/lib/supabase/server";
import EditForm from "./edit-form";

type CarouselEditProps = {
    params: Promise<{ id: string }>
}

export default async function CarouselEdit({ params }: CarouselEditProps) {
    const { id } = await params;
    const supabase = await createClient();
    const { data: CarouselItem } = await supabase
    .from('carousel_items')
    .select('*')
    .eq('id', id)
    .single();
    return <div>
        <h3 className="text-xl font-bold mb-4">Edit carousel item</h3>
        <EditForm carouselItem={CarouselItem} />
    </div>
}