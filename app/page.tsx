import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MailOpenIcon,MenuIcon } from "@/shared/icons"
import Header from "@/components/elements/header"

export default function Page() {
  
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Grow Your Audience with Our Newsletter Platform
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our easy-to-use newsletter platform helps you build and engage your audience. Start collecting
                  subscribers and sending newsletters today.
                </p>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing to Fit Your Needs</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works best for your newsletter. We have options for individuals and businesses of
                all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for individuals and small businesses.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">$9</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="text-center text-muted-foreground">Up to 1,000 subscribers</p>
                  </div>
                  <Button variant="outline" className="mt-6" as="a" href="/signup">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses and content creators.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">$29</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="text-center text-muted-foreground">Up to 10,000 subscribers</p>
                  </div>
                  <Button variant="outline" className="mt-6" as="a" href="/signup">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large businesses and organizations.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">$99</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <p className="text-center text-muted-foreground">Unlimited subscribers</p>
                  </div>
                  <Button variant="outline" className="mt-6" as="a" href="/signup">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Product</h3>
            <Link href="#" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" prefetch={false}>
              Features
            </Link>
            <Link href="#" prefetch={false}>
              Integrations
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" prefetch={false}>
              Templates
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Social</h3>
            <Link href="#" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="#" prefetch={false}>
              Instagram
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; 2024 Newsletter Platform. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

