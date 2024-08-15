import { supabase } from '../client';
import { SupabaseError } from '../errors/SupabaseError';
import { handleError } from '../errors/handleError';

export const getUserById = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw new SupabaseError(`Failed to fetch user by ID: ${userId}`);
    }

    return data;
  } catch (error) {
    handleError(error, `fetch user by ID: ${userId}`);
  }
};

export const getAllUsers = async () => {
  try {
    const { data, error } = await supabase.from('users').select('*');

    if (error) {
      throw new SupabaseError('Failed to fetch all users');
    }

    return data;
  } catch (error) {
    handleError(error, `Failed to fetch all users`);
  }
};

export const createUser = async (user: { name: string; email: string }) => {
  try {
    const { data, error } = await supabase.from('users').insert(user).single();

    if (error) {
      throw new SupabaseError('Failed to create new user');
    }

    return data;
  } catch (error) {
    handleError(error, `Failed to create new user`);
  }
};
