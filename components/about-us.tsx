import { FadeIn } from './fade-in';
import Image from 'next/image';
import { AboutUs as AboutUsType } from '@/shared/types/about-us.type';

type AboutUsProps = {
    aboutUs: AboutUsType;
};

export function AboutUs({ aboutUs }: AboutUsProps) {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24">
            <div className="grid items-center gap-12 md:grid-cols-2">
                <FadeIn>
                    <Image
                        src={aboutUs.image_url}
                        alt="About Us"
                        width={400}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </FadeIn>
                <FadeIn>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter">{aboutUs.title}</h2>
                        <p className="text-muted-foreground">{aboutUs.description}</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
