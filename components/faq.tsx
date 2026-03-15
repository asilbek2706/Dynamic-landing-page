"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { FadeIn } from "./fade-in";

const faqs = [
    {
        question: "What programs do you offer?",
        answer:
            "We offer a wide range of programs including mathematics, sciences, languages, and professional development courses. Each program is carefully designed to meet specific learning objectives.",
    },
    {
        question: "How long are the courses?",
        answer:
            "Course duration varies depending on the program. Most courses run for 8-12 weeks, with flexible scheduling options available to accommodate different needs.",
    },
    {
        question: "What is your teaching methodology?",
        answer:
            "We employ a blend of traditional and modern teaching methods, focusing on hands-on learning, practical applications, and interactive sessions to ensure comprehensive understanding.",
    },
];

export function Faq() {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <FadeIn>
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Find answers to common questions about our learning center.
                        </p>
                    </div>
                    <div className="mx-auto max-w-3xl mt-8">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}