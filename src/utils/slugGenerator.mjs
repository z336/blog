export function slugGenerator(toSlug) {
  return toSlug
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, "") // Remove non-word characters
    .replace(/--+/g, "-"); // Replace multiple hyphens with a single hyphen
}
