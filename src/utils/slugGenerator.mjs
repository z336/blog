export function slugGenerator(toSlug) {
  return toSlug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/gi, "-") // Replace anything that's not a letter or number with a hyphen
    .replace(/^-+|-+$/g, ""); // Remove any leading or trailing hyphens
}
