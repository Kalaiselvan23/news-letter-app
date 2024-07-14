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
import { SettingsIcon, LayoutDashboardIcon, SubscriptIcon, CalendarIcon, InfoIcon, HandHelpingIcon, MenuIcon, SearchIcon } from "@/shared/icons"
import { UserButton } from "@clerk/nextjs"
import { UsersRound } from "lucide-react"

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <NewspaperIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Newsletter Dashboard</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <LayoutDashboardIcon className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <SubscriptIcon className="h-5 w-5" />
                  <span className="sr-only">Subscribers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Subscribers</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <CalendarIcon className="h-5 w-5" />
                  <span className="sr-only">Campaigns</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Campaigns</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <InfoIcon className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <HandHelpingIcon className="h-5 w-5" />
                  <span className="sr-only">Help</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Help</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <NewspaperIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Newsletter Dashboard</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <LayoutDashboardIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <UsersRound />
                  Subscribers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <CalendarIcon className="h-5 w-5" />
                  Campaigns
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <InfoIcon className="h-5 w-5" />
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Newsletter</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <UserButton />
        </header>
        {/* <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="sm:col-span-2" x-chunk="dashboard-07-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Newsletter Subscribers</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Track the growth of your newsletter subscriber base over time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LinechartChart className="aspect-[9/4]" />
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
      </main> */}
        {children}
      </div>
    </div>
  )
}

export default Layout
