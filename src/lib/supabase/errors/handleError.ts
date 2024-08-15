// /src/lib/supabase/errors/handleError.ts

export const handleError = (error: unknown, context: string) => {
  if (error instanceof Error) {
    console.error(`${context}: ${error.message}`);
  } else {
    console.error(`${context}: An unexpected error occurred`, error);
  }
  throw error; // Re-throw the error after logging
};
