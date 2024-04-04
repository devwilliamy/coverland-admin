export const averageMonthlySpend = (data: number[]): number => {
  const sum = data.reduce((total, currentValue) => total + currentValue);
  const average = sum / data.length;
  return average;
};

export const calculateAverage = (data: number[]): number => {
  const sum = data.reduce((total, currentValue) => total + currentValue);
  const average = sum / data.length;
  return average;
};

export const averageSpendByMonth = (month: string): number => {};
