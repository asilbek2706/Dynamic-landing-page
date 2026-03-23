import { Carousel } from '@/components/carousel';
import { Features } from '@/components/features';
import { Testimonials } from '@/components/testimonials';
import { Faq } from '@/components/faq';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AboutUs } from '@/components/about-us';
import { createClient } from '@/lib/supabase/server';
import Contact from '@/app/contact';

export default async function Page() {
    const supabase = await createClient();
    const { data: carouselItems } = await supabase.from('carousel_items').select();
    const { data: aboutUs } = await supabase.from('about_us').select().single();
    return (
        <div className="bg-background min-h-screen font-sans antialiased">
            <Navigation />
            <main className="flex flex-col items-center justify-center">
                {carouselItems && (
                    <section className="w-full">
                        <Carousel items={carouselItems} />
                    </section>
                )}

                <AboutUs aboutUs={aboutUs} />
                <Features />
                <Testimonials />
                <Faq />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
