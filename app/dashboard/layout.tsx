 "use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import React from "react"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    const pathname = usePathname()

    const segments = pathname.split("/").filter(Boolean)
    const dashboardIndex = segments.indexOf("dashboard")
    const breadcrumbSegments =
        dashboardIndex === -1 ? segments : segments.slice(dashboardIndex)

    const breadcrumbs = breadcrumbSegments.map((segment, index) => {
        const href = "/" + breadcrumbSegments.slice(0, index + 1).join("/")
        const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())

        return { href, label }
    })

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map((crumb, index) => {
                                    const isLast = index === breadcrumbs.length - 1

                                    return (
                                        <React.Fragment key={crumb.href}>
                                            <BreadcrumbItem
                                                className={
                                                    index === 0 ? "hidden md:block" : undefined
                                                }
                                            >
                                                {isLast ? (
                                                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink href={crumb.href}>
                                                        {crumb.label}
                                                    </BreadcrumbLink>
                                                )}
                                            </BreadcrumbItem>
                                            {!isLast && (
                                                <BreadcrumbSeparator
                                                    className={
                                                        index === 0 ? "hidden md:block" : undefined
                                                    }
                                                />
                                            )}
                                        </React.Fragment>
                                    )
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}