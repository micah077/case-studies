import wixClient from "@/config/wixConfig";

const BASE_URL = process.env.BASE_URL;

const routesArray = [
  { name: "Contact Us", slug: "contact-us" },
  { name: "Blog", slug: "blogs" },
  { name: "Web Development", slug: "services/web-development" },
  { name: "Wix Development", slug: "services/wix-development" },
  { name: "Wordpress Development", slug: "services/wordpress-development" },
  { name: "Staff Augmentation", slug: "services/staff-augmentation" },
  { name: "Seo", slug: "services/seo" },
  { name: "Seo Audit", slug: "services/seo-audit" },
];

export default async function sitemap() {
  const routes = routesArray.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(),
  }));

  const { items } = await wixClient.posts.queryPosts().find();
  const blogs = items.map((blogItem) => ({
    url: `${BASE_URL}/blog/${blogItem.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs];
}
