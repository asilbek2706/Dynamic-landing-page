import {
    BookOpen,
    Users,
    Calendar,
    Trophy,
    Target,
    Lightbulb,
} from "lucide-react";
import { FadeIn } from "./fade-in";

const features = [
    {
        title: "Expert Instructors",
        description: "Learn from industry professionals with years of experience",
        icon: Users,
    },
    {
        title: "Flexible Schedule",
        description: "Choose from multiple time slots that fit your schedule",
        icon: Calendar,
    },
    {
        title: "Hands-on Learning",
        description: "Practice-oriented approach to ensure better understanding",
        icon: BookOpen,
    },
    {
        title: "Achievement Tracking",
        description: "Monitor your progress with detailed performance analytics",
        icon: Trophy,
    },
    {
        title: "Personalized Goals",
        description: "Set and achieve your learning objectives with guided support",
        icon: Target,
    },
    {
        title: "Interactive Sessions",
        description: "Engage in dynamic learning experiences with peers",
        icon: Lightbulb,
    },
];

export function Features() {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <FadeIn>
                <div className="container space-y-12 px-4 md:px-6 mx-auto max-w-7xl">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Our Features
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Discover what makes our learning center unique and how we can help
                            you achieve your goals.
                        </p>
                    </div>
                    <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="relative overflow-hidden rounded-lg border bg-background p-2"
                            >
                                <div className="flex h-full flex-col justify-between rounded-md p-6">
                                    <feature.icon className="h-12 w-12 mb-4" />
                                    <div className="space-y-2">
                                        <h3 className="font-bold">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}