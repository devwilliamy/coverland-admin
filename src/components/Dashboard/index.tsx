import { sampleBudget1 } from '@/data/sampleBudget';
import LineChart from '../Charts/LineChart';
import PageTitle from '../PageTitle';
import { sampleLineChart1 } from '@/data/sampleChart';
import { sampleLineChart2 } from '@/data/sampleChart2';
import { OrderSummary } from '@/lib/supabase/types/OrderSummary';
import DailyHourlyLineChart from '../Charts/LineChart/DailyHourlyLineChart';
import CarSeatCoverLineChart from '../Charts/LineChart/CarSeatCoverLineChart';

type DashboardProps = {
  orderSummary: OrderSummary;
  dailyHourlySummary: any;
};

export default function Dashboard({
  orderSummary,
  dailyHourlySummary,
}: DashboardProps) {
  return (
    <>
      <PageTitle title={'Test'} />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <h1 className="text-slate-100">Chart</h1>
          <div className="flex h-96">
            <LineChart data={orderSummary} />
          </div>
          {/* <div className="flex h-96">
            <DailyHourlyLineChart data={dailyHourlySummary} />
          </div> */}
          <div className="flex h-96">
            <CarSeatCoverLineChart data={dailyHourlySummary} />
          </div>
        </div>
      </main>
    </>
  );
}
