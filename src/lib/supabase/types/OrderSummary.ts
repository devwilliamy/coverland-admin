export type OrderSummary = {
  created_at_pst: string; // or Date if you parse it into a Date object
  complete_orders_count: number;
  completed_orders_count: number;
  total_completed_orders_count: number;
  pending_orders_count: number;
  cl_pre_orders_pending_count: number;
  cl_pre_orders_not_pending_count: number;
};
