import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import NexusAnalysis from '@/components/Taxjar/EconomicNexus/EconomicNexusTable';
import {
  getDailyOrderTotals,
  getHourlyOrdersSummary,
  getHourlyOrdersSummaryLastFewDays,
  getOrdersSummaryLast30Days,
  getOrdersSummaryLast7Days,
  getOrdersSummaryLastDay,
} from '@/lib/supabase/queries/orderQueries';

export const revalidate = 0;

const dataFetchers = {
  orderSummary7Days: getOrdersSummaryLast7Days,
  orderSummary30Days: getOrdersSummaryLast30Days,
  orderSummaryLastDay: getOrdersSummaryLastDay,
  dailyHourlySummary: getHourlyOrdersSummaryLastFewDays,
  hourlyOrderSummary: getHourlyOrdersSummary,
  dailyOrderTotal: getDailyOrderTotals,
};

async function fetchAllData() {
  const results = await Promise.all(
    Object.entries(dataFetchers).map(async ([key, fetcher]) => {
      const data = await fetcher();
      return [key, data];
    })
  );
  return Object.fromEntries(results);
}

export default async function DashboardPage() {
  const dashboardData = await fetchAllData();

  return (
    <div className="min-h-full">
      <Header />
      <Dashboard dashboardData={dashboardData} />
      <NexusAnalysis />
    </div>
  );
}
