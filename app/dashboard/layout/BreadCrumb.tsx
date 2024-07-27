"use client"
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const BreadCrumb = () => {
    const path = usePathname();
    const links = path.split("/").filter(path => path !== "" && path !== "dashboard")
    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/dashboard" prefetch={false}>
                            DASHBOARD
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {/* <BreadcrumbItem>
        <BreadcrumbPage>Newsletter</BreadcrumbPage>
      </BreadcrumbItem> */}
                {links.map((link, index) => {
                    return <BreadcrumbItem key={index}>
                         <BreadcrumbLink asChild>
                        <Link href={`/dashboard/${link}`} prefetch={false}>
                            {link.toUpperCase()}
                        </Link>
                    </BreadcrumbLink>
                    </BreadcrumbItem>
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadCrumb
