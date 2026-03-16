import { Carousel } from "../components/carousel";
import { Features } from "../components/features";
import { Testimonials } from "../components/testimonials";
import { Faq } from "../components/faq";
import { ContactForm } from "../components/contact-form";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { AboutUs } from "../components/about-us";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: carouselItems } = await supabase.from('carousel_items').select();
  console.log(carouselItems)
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <main className="flex flex-col items-center justify-center">
        {carouselItems && <section className="w-full">
          <Carousel items={carouselItems} />
        </section>}

        <AboutUs />
        <Features />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}