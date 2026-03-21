"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Crumb = {
    href: string
    label: string
}

type BreadcrumbsProps = {
    breadcrumbs?: Crumb[]
}

function getCrumbsFromPathname(pathname: string): Crumb[] {
    const cleanPath = pathname.replace(/\/+$/, "") // remove trailing slash
    if (!cleanPath) return [{ href: "/dashboard", label: "Dashboard" }]

    // Normalize: "/dashboard/carousel/create" -> ["dashboard","carousel","create"]
    const parts = cleanPath.split("/").filter(Boolean)

    // We only render breadcrumbs for the dashboard area.
    if (parts[0] !== "dashboard") return []

    const base: Crumb = { href: "/dashboard", label: "Dashboard" }

    const section = parts[1]
    if (!section) return [base]

    const sectionToLabel: Record<string, string> = {
        navbar: "Navbar",
        carousel: "Carousel",
        about: "About Us",
        features: "Features",
        testimonials: "Testimonials",
        faqs: "FAQs",
        "contact-submissions": "Contact Submissions",
        footer: "Footer",
    }

    if (section !== "carousel") {
        const label = sectionToLabel[section] ?? section[0].toUpperCase() + section.slice(1)
        return [base, { href: `/dashboard/${section}`, label }]
    }

    // /dashboard/carousel
    if (parts.length === 2) return [base, { href: "/dashboard/carousel", label: "Carousel" }]

    // /dashboard/carousel/create
    if (parts[2] === "create") {
        return [
            base,
            { href: "/dashboard/carousel", label: "Carousel" },
            { href: "/dashboard/carousel/create", label: "Add carousel item" },
        ]
    }

    // /dashboard/carousel/[id]/edit
    if (parts.length >= 4 && /^\d+$/.test(parts[2]) && parts[3] === "edit") {
        return [
            base,
            { href: "/dashboard/carousel", label: "Carousel" },
            { href: `/dashboard/carousel/${parts[2]}/edit`, label: "Edit" },
        ]
    }

    // Fallback for unknown deeper carousel routes.
    return [base, { href: "/dashboard/carousel", label: "Carousel" }]
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
    const pathname = usePathname()
    const computedBreadcrumbs = React.useMemo(
        () => getCrumbsFromPathname(pathname),
        [pathname],
    )

    const crumbs = breadcrumbs ?? computedBreadcrumbs

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1

                    return (
                        <React.Fragment key={`${crumb.href}-${index}`}>
                            <BreadcrumbItem
                                className={undefined}
                            >
                                {isLast ? (
                                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link href={crumb.href}>{crumb.label}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && (
                                <BreadcrumbSeparator
                                    className={undefined}
                                />
                            )}
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}