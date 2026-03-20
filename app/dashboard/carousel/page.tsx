import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server"
import { Link } from "next/link";

export default async function CarouselManagemant() {
    const supabase = await createClient();
    const { data: carouselItems } = await supabase.from('carousel_items').select('*')
    return <div>
        <h3 className="text-xl font-bold">Carousel management</h3>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>CTA</TableHead>
                    <TableHead>Creates At</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {carouselItems?.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.description.slice(0, 50)}</TableCell>
                        <TableCell>
                            <Link href={item.cta_url}>{item.cta_text}</Link>
                        </TableCell>
                        <TableCell>{item.created_at}</TableCell>
                        <TableCell>
                            <div className="flex gap-2">
                                <Button variant="outline">Edit</Button>
                                <Button variant="destructive">Delete</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
}