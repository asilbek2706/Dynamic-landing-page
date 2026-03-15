import Image from "next/image";
import { FadeIn } from "./fade-in";

const testimonials = [
    {
        quote:
            "The learning center has transformed my understanding of the subject matter. The instructors are exceptional.",
        author: "Alex Johnson",
        role: "Student",
    },
    {
        quote:
            "Flexible scheduling and personalized attention make this the perfect learning environment.",
        author: "Sarah Chen",
        role: "Professional",
    },
    {
        quote:
            "The hands-on approach to learning has helped me grasp complex concepts with ease.",
        author: "Michael Brown",
        role: "Student",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <FadeIn>
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Testimonials
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            See what our students say about their learning experience.
                        </p>
                    </div>
                    <div className="mx-auto grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-12">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 text-center"
                            >
                                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                                    <Image
                                        src={`/placeholder.svg?height=96&width=96`}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <blockquote className="text-muted-foreground">
                                    {testimonial.quote}
                                </blockquote>
                                <div>
                                    <cite className="not-italic font-semibold">
                                        {testimonial.author}
                                    </cite>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}