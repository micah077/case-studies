import BlogsDetailsPage from "@/components/Blogs/Details/Index";
import { blogDetails } from "@/utils/BlogPageData/BlogDetails";

import wixClient from "@/config/wixConfig";

export const generateStaticParams = async () => {
  try {
    const { items } = await wixClient.posts.queryPosts().find();
    return items.map((blog) => ({
      id: blog.slug,
    }));
  } catch (error) {
    console.log("Error:", error);
  }
};

export async function generateMetadata({ params }) {
  const slug = params.id;
  const getSelectedBlogData = async () => {
    try {
      const options = {
        fieldsets: [
          "CONTENT",
          "CONTENT_TEXT",
          "RICH_CONTENT",
          "RICH_CONTENT_COMPRESSED",
          "RICH_CONTENT_STRING",
        ],
      };

      const { items } = await wixClient.posts
        .queryPosts(options)
        .hasSome("slug", [slug])
        .find();

      return items[0];
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const selectedBlogData = await getSelectedBlogData();

  if (!selectedBlogData) {
    return {
      title: "Blog Not Found",
    };
  }

  const metaTitle = selectedBlogData.title || "Blog Details";
  const metaDescription = selectedBlogData.excerpt || "Blog details page";

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
    },
  };
}

const page = async ({ params }) => {
  const slug = params.id;
  const getSelectedBlogData = async () => {
    try {
      const options = {
        fieldsets: [
          "CONTENT",
          "CONTENT_TEXT",
          "RICH_CONTENT",
          "RICH_CONTENT_COMPRESSED",
          "RICH_CONTENT_STRING",
        ],
      };

      const { items } = await wixClient.posts
        .queryPosts(options)
        .hasSome("slug", [slug])
        .find();

      return items[0];
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const [selectedBlogData] = await Promise.all([getSelectedBlogData()]);
  const blogData = blogDetails.find((blog) => blog.slug === slug);

  if (!selectedBlogData) {
    return (
      <section
        style={{
          backgroundSize: "100% 100%",
        }}
        className="bg-center bg-[image:--bgImageBlogDetailsSec1] w-[100%] min-h-[85dvh] bg-no-repeat bg-cover flex items-center justify-center pt-[120px] sm:pt-[175px] 2xl:pt-[100px] 3xl:pt-10 "
      >
        <h1 className="text-white text-[32px]">NO BLOG FOUND</h1>
      </section>
    );
  }

  return (
    <BlogsDetailsPage blogData={blogData} selectedBlogData={selectedBlogData} />
  );
};

export default page;
