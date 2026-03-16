"use client"

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
    breadcrumbs: Crumb[]
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1

                    return (
                        <>
                            <BreadcrumbItem
                                key={crumb.href}
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
                        </>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}