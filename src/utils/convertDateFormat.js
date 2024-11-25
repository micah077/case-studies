export const convertDateFormat = (dateString) => {
  const date = new Date(dateString);

  // Define the options for formatting
  const options = { year: "numeric", month: "short", day: "2-digit" };

  // Convert to the desired format
  return date.toLocaleDateString("en-US", options);
};
