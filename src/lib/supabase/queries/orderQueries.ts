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

// You can add more order-related queries here