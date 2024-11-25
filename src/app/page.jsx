import { generateMetadataOfPage } from "@/utils/PagesMetaData/metadataConfig";
import HomePage from "@/components/Home/Index";

export async function generateMetadata() {
  try {
    return generateMetadataOfPage("home");
  } catch (error) {
    console.error("Error in metadata generation:", error);
  }
}
const page = () => {
  return <HomePage />;
};
export default page;
