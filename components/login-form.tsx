"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { login } from "@/app/login/actions"
import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

type LoginFormProps = React.ComponentPropsWithoutRef<"div"> & {
  errorMessage?: string
  setErrorMessage?: (message: string | null) => void
}

export function LoginForm({
  className,
  errorMessage,
  setErrorMessage,
  ...props
}: LoginFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [error, setError] = React.useState<string | null>(errorMessage ?? null)
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    if (errorMessage) {
      setError(errorMessage)
      console.error(errorMessage)
      setErrorMessage?.(errorMessage)
    }
  }, [errorMessage, setErrorMessage])

  React.useEffect(() => {
    const urlError = searchParams.get("error")
    if (urlError) {
      setError(urlError)
      console.error(urlError)
      setErrorMessage?.(urlError)
    }
    // Intentionally only re-run when query string changes
  }, [searchParams, setErrorMessage])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      try {
        const result = await login(formData)

        if (!result?.success) {
          const message = result?.error ?? "Login failed"
          setError(message)
          console.error(message, { result })
          setErrorMessage?.(message)
          return
        }

        setErrorMessage?.(null)
        router.push("/")
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        setError(message)
        console.error("Login request failed:", err)
        setErrorMessage?.(message)
      }
    })
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input id="password" name="password" type="password" required />
              </Field>
              {error ? (
                <Field>
                  <Alert variant="destructive" className="mt-4">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Login failed</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </Field>
              ) : null}
              <Field>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Logging in..." : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
