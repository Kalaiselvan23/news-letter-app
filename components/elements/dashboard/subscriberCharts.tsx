// "use client";
// import { useEffect, useState } from "react";
// import useSubscribersData from "@/shared/hooks/useSubscribersData";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
// } from "recharts";

// interface subscribersAnalyticsData {
//     month: string;
//     count: string;
// }

// const SubscribersChart = () => {
//     const { subscribersData, loading } = useSubscribersData();
//     const data: any[] = [];

//     console.log('Subscribers Data:', subscribersData);

//     if (subscribersData && Array.isArray(subscribersData.last7Months)) {
//         subscribersData.last7Months.forEach((item: subscribersAnalyticsData) => {
//             console.log('Processing item:', item);
//             data.push({
//                 month: item?.month,
//                 count: parseInt(item?.count, 10),
//             });
//         });
//     } else {
//         console.warn('last7Months is not an array or is undefined');
//     }

//     console.log('Processed Data:', data);

//     return (
//         <div style={{ height: '400px' }}>
//             {loading ? (
//                 <div className="h-[85%] flex items-center justify-center w-full">
//                     <h5>Loading...</h5>
//                 </div>
//             ) : (
//                 <ResponsiveContainer width="100%" height="85%" className="mt-5">
//                     <LineChart
//                         width={500}
//                         height={200}
//                         data={data}
//                         syncId="anyId"
//                         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//                     >
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="month" />
//                         <YAxis />
//                         <Tooltip />
//                         <Line type="monotone" dataKey="count" stroke="#EB4898" fill="#EB4898" />
//                     </LineChart>
//                 </ResponsiveContainer>
//             )}
//         </div>
//     );
// };

// export default SubscribersChart;


"use client";
import { useEffect, useState } from "react";
import useSubscribersData from "@/shared/hooks/useSubscribersData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useSubscribersAnalytics from "@/shared/hooks/useSubscriberAnalytics";

interface subscribersAnalyticsData {
  month: string;
  count: string;
}

const SubscribersChart = () => {
  const { subscribersData, loading } = useSubscribersAnalytics();
  const data: any[] = [];

  console.log('Subscribers Data:', subscribersData);

  if (subscribersData) {
    
    const last7Months = subscribersData.last7Months; 
    if (Array.isArray(last7Months)) {
      last7Months.forEach((item: subscribersAnalyticsData) => {
        console.log('Processing item:', item);
        data.push({
          month: item?.month,
          count: parseInt(item?.count, 10), 
        });
      });
    } else {
      console.warn('last7Months is not an array or is undefined');
    }
  }

  console.log('Processed Data:', data);

  return (
    <div style={{ height: '400px' }}>
      {loading ? (
        <div className="h-[85%] flex items-center justify-center w-full">
          <h5>Loading...</h5>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="85%" className="mt-5">
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#EB4898" fill="#EB4898" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default SubscribersChart;
