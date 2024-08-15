export const calculateAverage = (data: number[]): number => {
  if (data.length === 0) {
    return NaN;
  }
  const sum = data.reduce((total, currentValue) => total + currentValue);
  const average = sum / data.length;
  return average;
};

export const calculatePercentageChange = (
  previousValue: number,
  currentValue: number
): number => {
  if (!previousValue) return NaN;
  return 100 * ((currentValue - previousValue) / previousValue);
};
