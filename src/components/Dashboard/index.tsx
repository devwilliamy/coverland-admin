import { sampleBudget1 } from '@/data/sampleBudget';
import LineChart from '../Charts/LineChart';
import PageTitle from '../PageTitle';
import { sampleLineChart1 } from '@/data/sampleChart';
import { sampleLineChart2 } from '@/data/sampleChart2';
import { OrderSummary } from '@/lib/supabase/types/OrderSummary';
import DailyHourlyLineChart from '../Charts/LineChart/DailyHourlyLineChart';
import CarSeatCoverLineChart from '../Charts/LineChart/CarSeatCoverLineChart';
import DailyOrderTotal from '../Charts/LineChart/DailyOrderTotal';

type DashboardData = {
  orderSummary7Days: any;
  orderSummary30Days: any;
  orderSummaryLastDay: any;
  dailyHourlySummary: any;
  hourlyOrderSummary: any;
  dailyOrderTotal: any;
};
type DashboardProps = {
  dashboardData: DashboardData;
};

export default function Dashboard({ dashboardData }: DashboardProps) {
  return (
    <>
      <PageTitle title={'Test'} />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <h1 className="text-slate-100">Chart</h1>
          <div className="flex h-96">
            <h2>Order Summary 7 Days</h2>
            <LineChart data={dashboardData.orderSummary7Days} />
          </div>
          {/* <div className="flex h-96">
            <h2>Order Summary 30 Days</h2>
            <LineChart data={dashboardData.orderSummary30Days} />
          </div> */}
          <div className="flex h-96">
            <h2>Purchases by the hour for past 5 days</h2>

            <DailyHourlyLineChart data={dashboardData.dailyHourlySummary} />
          </div>
          <div className="flex h-96">
            <h2>Car / Seat Cover Sum Over 30 Days</h2>
            <CarSeatCoverLineChart data={dashboardData.hourlyOrderSummary} />
          </div>
          <div className="flex h-96">
            <h2>Car / Seat Cover Sum Over 30 Days</h2>
            <DailyOrderTotal data={dashboardData.dailyOrderTotal} />
          </div>
        </div>
      </main>
    </>
  );
}
