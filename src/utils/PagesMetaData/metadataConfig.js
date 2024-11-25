import metaData from "./metadata";

export function generateMetadataOfPage(slug) {
  const data = metaData[slug] || {
    title: "Strugbits",
    description: "Default description for pages without specific metadata.",
  };
  return data;
}
