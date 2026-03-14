import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6">
      <h1 className="text-4xl font-bold text-foreground">Hello, World!</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
}
