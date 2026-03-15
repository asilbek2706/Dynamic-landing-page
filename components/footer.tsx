export function Footer() {
    return (
        <footer className="w-full border-t py-6">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Learning Center. All rights reserved.
                </p>
            </div>
        </footer>
    );
}