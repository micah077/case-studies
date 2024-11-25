// utils/convertWixImageUrl.js
export const convertWixImageUrl = (wixUrl) => {
  // Check if the URL starts with "wix:image://v1/"
  if (wixUrl?.startsWith("wix:image://v1/")) {
    // Remove the "wix:image://v1/" prefix
    let cleanedUrl = wixUrl.replace("wix:image://v1/", "");

    // Split at '#' to remove everything after the file extension
    cleanedUrl = cleanedUrl.split("#")[0];

    // Ensure we only keep the part before any additional "/"
    const validUrl = cleanedUrl.split("/")[0]; // Take the first part before any "/" (e.g., `~mv2.png`)

    // Decode URL-encoded parts (like %20 for spaces)
    const decodedUrl = decodeURIComponent(validUrl);

    // Return the proper static URL for Wix images
    return `https://static.wixstatic.com/media/${decodedUrl}`;
  }
  return wixUrl; // Return as is if it's already a valid URL
};
