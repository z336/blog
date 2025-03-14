export function dateFormatter(dateToFormat) {
  const date = new Date(dateToFormat); // Ensure that the date is parsed correctly
  if (isNaN(date)) {
    console.error("Invalid date:", dateToFormat);
    return "Invalid Date";
  }
  // Format the date using UTC time zone
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC", // Force UTC time zone to avoid local time zone discrepancies
  });
}
