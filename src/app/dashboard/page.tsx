import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import {
  getHourlyOrdersSummaryLastFewDays,
  getOrdersSummaryLast30Days,
  getOrdersSummaryLast7Days,
  getOrdersSummaryLastDay,
} from '@/lib/supabase/queries/orderQueries';

export const revalidate = 0;

export default async function DashboardPage() {
  const orderSummary = await getOrdersSummaryLast7Days();
  // const orderSummary = await getOrdersSummaryLast30Days();
  // const orderSummary = await getOrdersSummaryLastDay();
  const dailyHourlySummary = await getHourlyOrdersSummaryLastFewDays();
  console.log('dailyHourlySummary:', dailyHourlySummary);
  return (
    <div className="min-h-full">
      <Header />
      <Dashboard
        orderSummary={orderSummary}
        dailyHourlySummary={dailyHourlySummary}
      />
    </div>
  );
}
