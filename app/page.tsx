import Image from "next/image";
import { Carousel } from "../components/carousel";
import { Features } from "../components/features";
import { Testimonials } from "../components/testimonials";
import { Faq } from "../components/faq";
import { ContactForm } from "../components/contact-form";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { FadeIn } from "../components/fade-in";

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <main className="flex flex-col items-center justify-center">
        <section className="w-full">
          <Carousel />
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="About Us"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </FadeIn>
            <FadeIn>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  About Us
                </h2>
                <p className="text-muted-foreground">
                  We are dedicated to providing high-quality offline learning
                  experiences. Our center combines traditional teaching methods
                  with modern learning approaches to ensure the best possible
                  educational outcomes for our students.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <Features />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}