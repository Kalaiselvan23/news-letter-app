"use client"
import { Card, CardHeader, CardDescription, CardFooter, CardContent, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import useSubscribersAnalytics from '@/shared/hooks/useSubscriberAnalytics'

const OverviewCard = () => {
    const { subscribersData, loading } = useSubscribersAnalytics();
    const lastMonthSubscribers = !loading && subscribersData?.last7Months[subscribersData.last7Months.length - 1];
    const previouslastMonthSubscribers = !loading && subscribersData?.last7Months[subscribersData.last7Months.length - 2];
    let comparePercentage = 0;
    if(previouslastMonthSubscribers && previouslastMonthSubscribers.count>0)
    {
        comparePercentage=((lastMonthSubscribers-previouslastMonthSubscribers)/previouslastMonthSubscribers)*100;
    }
    else{
        comparePercentage=100;
    }
    console.log(comparePercentage)
    return (
        <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader className="pb-2">
                <CardDescription>Subscribers</CardDescription>
                <CardTitle className="text-4xl">{loading ? "..." : lastMonthSubscribers?.count}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">{comparePercentage}% from last month</div>
            </CardContent>
            <CardFooter>
                <Progress value={12} aria-label="12% click-through rate" />
            </CardFooter>
        </Card>
    )
}

export default OverviewCard
