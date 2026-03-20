import { createClient } from "@/lib/supabase/server"
import CarouselDataTable from "./data-table";

export default async function CarouselManagemant() {
    const supabase = await createClient();
    const { data: carouselItems } = await supabase.from('carousel_items').select('*')
    return <div>
        <h3 className="text-xl font-bold mb-4">Carousel management</h3>
        <CarouselDataTable items={carouselItems} />
    </div>
}