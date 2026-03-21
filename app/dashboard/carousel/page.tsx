import { createClient } from "@/lib/supabase/server"
import CarouselDataTable from "./data-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function CarouselManagemant() {
    const supabase = await createClient();
    const { data: carouselItems } = await supabase.from('carousel_items').select('*')
    return <div>
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Carousel management</h3>
            <Link href="/dashboard/carousel/create">
                <Button>
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add carousel item
                </Button>
            </Link>
        </div>
        <CarouselDataTable items={carouselItems} />
    </div>
}