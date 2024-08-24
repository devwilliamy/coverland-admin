/**
 * Combines multiple class names into a single string.
 * Filters out falsy values and trims the result.
 *
 * @param {...(string|boolean|undefined|null)} classes - Class names to combine
 * @returns {string} Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ').trim();
}
