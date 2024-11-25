import WixDevelopmentPage from "@/components/Services/Development/WixDevelopment/Index";
import { generateMetadataOfPage } from "@/utils/PagesMetaData/metadataConfig";

export async function generateMetadata() {
  try {
    return generateMetadataOfPage("wixDevelopment");
  } catch (error) {
    console.error("Error in metadata generation:", error);
  }
}
const page = () => {
  return <WixDevelopmentPage />;
};

export default page;
