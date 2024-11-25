import BlogsPage from '@/components/Blogs/Index';
import wixClient from "@/config/wixConfig";
import { generateMetadataOfPage } from "@/utils/PagesMetaData/metadataConfig";

export async function generateMetadata() {
  try {
    return generateMetadataOfPage("blogs");
  } catch (error) {
    console.error("Error in metadata generation:", error);
  }
}
const page = async () => {
  const getAllBlogs = async () => {
    try {
      const { items } = await wixClient.posts.queryPosts().find();
      return items;
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const [allBlogs] = await Promise.all([getAllBlogs()]);
  return <BlogsPage blogs={allBlogs} />;
};

export default page;
