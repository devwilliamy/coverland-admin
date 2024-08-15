import { supabase } from '../client';
import { SupabaseError } from '../errors/SupabaseError';
import { handleError } from '../errors/handleError';

export const getProductById = async (productId: string) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .single();

    if (error) {
      throw new SupabaseError(`Failed to fetch product by ID: ${productId}`);
    }

    return data;
  } catch (error) {
    handleError(error, `fetch product by ID: ${productId}`);
  }
};

export const getAllProducts = async () => {
  try {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
      throw new SupabaseError('Failed to fetch all products');
    }

    return data;
  } catch (error) {
    handleError(error, 'Failed to fetch all products');
  }
};

export const createProduct = async (product: {
  name: string;
  price: number;
}) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .single();

    if (error) {
      throw new SupabaseError('Failed to create new product');
    }

    return data;
  } catch (error) {
    handleError(error, 'Failed to create new product');
  }
};
