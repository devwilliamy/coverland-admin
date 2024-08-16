'use client';
import { ResponsiveLine } from '@nivo/line';

const transformDataForChart = (data) => {
  const hours = Array.from(
    { length: 24 },
    (_, i) => `${String(i).padStart(2, '0')}:00`
  );

  // Group data by day
  const groupedByDay = data.reduce((acc, current) => {
    const day = current.hour.split('T')[0]; // Extract date part as the 'day'
    const hour = current.hour.split('T')[1].substring(0, 5); // Extract time (hour and minute) part

    if (!acc[day]) {
      acc[day] = { id: day, data: [] };
    }

    acc[day].data.push({ x: hour, y: current.total_completed_orders_count });

    return acc;
  }, {});

  // Ensure all hours are present for each day, filling in missing hours with 0
  Object.keys(groupedByDay).forEach((day) => {
    const filledData = hours.map((hour) => {
      const hourData = groupedByDay[day].data.find((d) => d.x === hour);
      return hourData || { x: hour, y: 0 };
    });
    groupedByDay[day].data = filledData;
  });

  return Object.values(groupedByDay);
};

const DailyHourlyLineChart = ({ data }) => {
  // Transform the data for Nivo
  const transformedData = transformDataForChart(data);

  return (
    <ResponsiveLine
      data={transformedData}
      margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Hour',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Completed Orders',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default DailyHourlyLineChart;
