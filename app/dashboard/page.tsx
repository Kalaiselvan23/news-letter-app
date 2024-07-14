"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { NewspaperIcon } from "@/shared/icons"
import { SettingsIcon,LayoutDashboardIcon,SubscriptIcon,CalendarIcon,InfoIcon,HandHelpingIcon,MenuIcon,SearchIcon } from "@/shared/icons"
import SubscribersChart from '../../components/elements/dashboard/subscriberCharts';
export default function Page() {
  return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="sm:col-span-2" x-chunk="dashboard-07-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>Newsletter Subscribers</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Track the growth of your newsletter subscriber base over time.
                </CardDescription>
              </CardHeader>
              <CardContent>
               <SubscribersChart/>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Open Rate</CardDescription>
                <CardTitle className="text-4xl">78%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+5% from last month</div>
              </CardContent>
              <CardFooter>
                <Progress value={78} aria-label="78% open rate" />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-07-chunk-2">
              <CardHeader className="pb-2">
                <CardDescription>Click-through Rate</CardDescription>
                <CardTitle className="text-4xl">12%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+2% from last month</div>
              </CardContent>
              <CardFooter>
                <Progress value={12} aria-label="12% click-through rate" />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader className="pb-2">
                <CardDescription>Unsubscribe Rate</CardDescription>
                <CardTitle className="text-4xl">3%</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">-1% from last month</div>
              </CardContent>
              <CardFooter>
                <Progress value={3} aria-label="3% unsubscribe rate" />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-07-chunk-4">
              <CardHeader className="px-7">
                <CardTitle>Recent Campaigns</CardTitle>
                <CardDescription>View the performance of your latest newsletter campaigns.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead className="hidden sm:table-cell">Sent</TableHead>
                      <TableHead className="hidden sm:table-cell">Open Rate</TableHead>
                      <TableHead className="hidden md:table-cell">Click-through</TableHead>
                      <TableHead className="text-right">Unsubscribes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-accent">
                      <TableCell>
                        <div className="font-medium">Summer Sale</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">June 15, 2023</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">12,345</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          82%
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">15%</TableCell>
                      <TableCell className="text-right">125</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">New Product Launch</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">May 30, 2023</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">8,765</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="outline">
                          75%
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">12%</TableCell>
                      <TableCell className="text-right">85</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Holiday Promo</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">December 1, 2022</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">15,678</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          85%
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">18%</TableCell>
                      <TableCell className="text-right">65</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Black Friday Deals</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">November 25, 2022</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">20,345</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          88%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
  )
}







