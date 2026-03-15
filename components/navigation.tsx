import Link from "next/link";

export function Navigation() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center mx-auto">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold">Learning Center</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="#features"
                            className="transition-colors hover:text-foreground/80"
                        >
                            Features
                        </Link>
                        <Link
                            href="#testimonials"
                            className="transition-colors hover:text-foreground/80"
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="#faq"
                            className="transition-colors hover:text-foreground/80"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#contact"
                            className="transition-colors hover:text-foreground/80"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}