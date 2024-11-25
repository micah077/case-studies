import WebDevelopmentPage from "@/components/Services/Development/WebDevelopment/Index";
import { generateMetadataOfPage } from "@/utils/PagesMetaData/metadataConfig";

export async function generateMetadata() {
  try {
    return generateMetadataOfPage("webDevelopment");
  } catch (error) {
    console.error("Error in metadata generation:", error);
  }
}
const Page = () => {
  return <WebDevelopmentPage />;
};

export default Page;
