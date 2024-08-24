import { supabase } from '../client';
import { handleError } from '../errors/handleError';

export const getOrdersSummaryLast7Days = async () => {
  try {
    const { data, error } = await supabase.rpc(
      'get_orders_summary_last_7_days'
    );

    if (error) {
      throw new Error(
        `Error fetching order summary from RPC: ${error.message}`
      );
    }

    return data;
  } catch (error) {
    handleError(error, `fetch order summary for the last 7 days`);
  }
};

export const getOrdersSummaryLast30Days = async () => {
  try {
    const { data, error } = await supabase.rpc(
      'get_orders_summary_last_30_days'
    );

    if (error) {
      throw new Error(
        `Error fetching order summary from RPC: ${error.message}`
      );
    }

    return data;
  } catch (error) {
    handleError(error, `fetch order summary for the last 30 days`);
  }
};

export const getOrdersSummaryLastDay = async () => {
  try {
    const { data, error } = await supabase.rpc('get_orders_summary_last_day');

    if (error) {
      throw new Error(
        `Error fetching order summary for the last day from RPC: ${error.message}`
      );
    }

    return data;
  } catch (error) {
    handleError(error, 'fetch order summary for the last day');
  }
};

export const getHourlyOrdersSummaryLastFewDays = async () => {
  try {
    const { data, error } = await supabase.rpc(
      'get_hourly_orders_summary_last_few_days'
    );

    if (error) {
      throw new Error(
        `Error fetching hourly orders summary from RPC: ${error.message}`
      );
    }

    return data;
  } catch (error) {
    handleError(error, 'fetch hourly orders summary for the last few days');
  }
};

export const getHourlyOrdersSummary = async () => {
  try {
    const { data, error } = await supabase.rpc('get_hourly_orders_summary');

    if (error) {
      throw new Error(
        `Error fetching hourly orders summary from RPC: ${error.message}`
      );
    }

    return data;
  } catch (error) {
    handleError(error, 'fetch hourly orders summary for the last few days');
  }
};

// You can add more order-related queries here

export const getDailyOrderTotals = async (daysAgo = 30) => {
  const { data, error } = await supabase.rpc('get_daily_order_totals', {
    days_ago: daysAgo,
  });

  if (error) console.error('Error:', error);
  else return data;
};
