import WordPressDevelopmentPage from "@/components/Services/Development/WordPressDevelopment/Index";
import { generateMetadataOfPage } from "@/utils/PagesMetaData/metadataConfig";

export async function generateMetadata() {
  try {
    return generateMetadataOfPage("wordPressDevelopment");
  } catch (error) {
    console.error("Error in metadata generation:", error);
  }
}
const page = () => {
  return <WordPressDevelopmentPage />;
};

export default page;
