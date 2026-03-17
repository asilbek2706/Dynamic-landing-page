"use client"

import * as React from "react"

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
                        <React.Fragment key={crumb.href}>
                            <BreadcrumbItem
                                className={index === 0 ? "hidden md:block" : undefined}
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
    )
}