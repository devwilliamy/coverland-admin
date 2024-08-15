import { sampleBudget1 } from '@/data/sampleBudget';
import LineChart from '../Charts/LineChart';
import PageTitle from '../PageTitle';
import { sampleLineChart1 } from '@/data/sampleChart';
import { sampleLineChart2 } from '@/data/sampleChart2';
export default function Dashboard() {
  return (
    <>
      <PageTitle title={'Test'} />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <h1 className="text-slate-100">Chart</h1>
          <div className="flex h-96">
            <LineChart data={sampleLineChart2} />
          </div>
        </div>
      </main>
    </>
  );
}
