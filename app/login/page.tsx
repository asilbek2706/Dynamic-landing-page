"use client"

import { LoginForm } from "@/components/login-form"
import { GalleryVerticalEndIcon } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEndIcon className="size-4" />
          </div>
          Learning centre
        </a>
        <LoginForm
          errorMessage={errorMessage ?? undefined}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </div>
  )
}
