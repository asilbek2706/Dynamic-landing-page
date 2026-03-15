import { Carousel } from "../components/carousel";
import { Features } from "../components/features";
import { Testimonials } from "../components/testimonials";
import { Faq } from "../components/faq";
import { ContactForm } from "../components/contact-form";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import {AboutUs} from "../components/about-us";

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <main className="flex flex-col items-center justify-center">
        <section className="w-full">
          <Carousel />
        </section>

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