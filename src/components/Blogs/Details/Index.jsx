import Image from "next/image";

import BusinessSection from "@/components/Common/Sections/BusinessSection";
import BackgroundImage from "@/components/Common/BackgroundImage";

import FeaturedBlogsSection from "../FeaturedBlogsSection";
import SubscribeForm from "./SubscribeForm";

import { convertDateFormat } from "@/utils/convertDateFormat";
import { featuredBlogs } from "@/utils/BlogPageData";

const renderTextWithDecorations = (textData, id) => {
  if (!textData?.decorations || textData.decorations.length === 0) {
    return textData?.text;
  }

  return textData.decorations.reduce((acc, decoration) => {
    switch (decoration.type) {
      case "ITALIC":
        return <i>{acc}</i>;
      case "BOLD":
        return <b>{acc}</b>;
      case "LINK":
        return (
          <a
            href={decoration.linkData.link.url}
            target="_blank"
            rel="noreferrer"
          >
            {acc}
          </a>
        );
      default:
        return acc;
    }
  }, textData.text);
};

const renderNode = (node) => {
  switch (node.type) {
    case "HEADING":
      const headingClass = `text-center text-uppercase`;
      return (
        <HeadingComponent
          level={node.headingData.level}
          id={node._id}
          className={headingClass}
        >
          {node.nodes.map((textNode) => {
            return renderTextWithDecorations(textNode.textData);
          })}
        </HeadingComponent>
      );

    case "ORDERED_LIST":
      return (
        <ol className="list-decimal">
          {node.nodes.map((listItemNode) => (
            <li key={listItemNode._id}>{renderNode(listItemNode)}</li>
          ))}
        </ol>
      );

    case "LIST_ITEM":
      return node.nodes.map((paragraphNode) => (
        <div key={paragraphNode._id}>{renderNode(paragraphNode)}</div>
      ));

    case "PARAGRAPH":
      return (
        <p>
          {node.nodes.map((textNode, idx) => {
            return renderNode(textNode);
          })}
        </p>
      );

    case "TEXT":
      return node.textData.decorations.reduce((acc, decoration) => {
        if (decoration.type === "ANCHOR") {
          return (
            <a
              href={`#${decoration.anchorData.anchor}`}
              key={decoration.anchorData.anchor}
            >
              {acc}
            </a>
          );
        }
        if (decoration.type === "UNDERLINE") {
          return <u key={`${node._id}-underline`}>{acc}</u>;
        }
        if (decoration.type === "COLOR") {
          return (
            <span
              key={`${node._id}-color`}
              style={{ color: decoration.colorData.foreground }}
            >
              {acc}
            </span>
          );
        }
        if (decoration.type === "LINK")
          return (
            <a
              href={decoration.linkData.link.url}
              target="_blank"
              rel="noreferrer"
            >
              {acc}
            </a>
          );
        if (decoration.type === "BOLD") return <strong>{acc}</strong>;
        if (decoration.type === "ITALIC") return <em>{acc}</em>;

        return acc;
      }, node.textData.text);

    case "BULLETED_LIST":
      return (
        <ul>
          {node.nodes.map((listItemNode) => (
            <li key={listItemNode._id}>{renderNode(listItemNode)}</li>
          ))}
        </ul>
      );
    case "DIVIDER":
      return <hr />;
    case "IMAGE":
      const {
        image: { src, width, height },
        altText,
        containerData: { alignment },
      } = node.imageData;

      const alignmentClass =
        alignment === "CENTER"
          ? "mx-auto"
          : alignment === "LEFT"
          ? "mr-auto"
          : "ml-auto";
      const wixImageUrl = `https://static.wixstatic.com/media/${src._id}`;

      return (
        <div
          className={`my-4 ${alignmentClass}`}
          style={{ maxWidth: `${width}px` }}
        >
          <Image
            src={wixImageUrl}
            alt={altText}
            width={width}
            height={height}
            className="object-contain"
          />
        </div>
      );
    default:
      return null;
  }
};

const HeadingComponent = ({ level, id, children }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag id={id}>{children}</HeadingTag>;
};
const BlogsDetailsPage = ({ blogData, selectedBlogData }) => {
  const nodes = selectedBlogData?.richContent?.nodes;

  return (
    <main>
      <BackgroundImage
        src="/assets/images/Blog Details/blogDe.webp"
        alt="blog details page"
      >
        <section className="max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between xl:justify-between flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap py-32 sm:py-32 md:py-32 lg:py-36 xl:py-40 px-8">
          <div>
            <div className="max-w-[756px]">
              <div className="flex-1 max-w-[673px] flex flex-col gap-5">
                <p className="font-Inter font-normal text-center lg:text-left text-[18px] md:text-[21.54px] text-[white]">
                  {blogData?.category}Category
                </p>
                <h1 className="text-[20px] sm:text-[26px] md:text-[30px] text-center lg:text-left lg:text-[30px]  xl:text-[32px] 2xl:text-[46px] font-DM text-[white] font-bold leading-[55px]">
                  {selectedBlogData?.title}
                </h1>
                <p className="font-Inter font-[400] text-[13px] sm:text-[15px] md:text-[15px] 2xl:text-[21px] text-center lg:text-left mt-4 text-[white]">
                  {selectedBlogData?.excerpt}
                </p>
                <div className="flex flex-row text-[12px] md:text-[14px] font-Inter justify-center lg:justify-start font-normal leading-[21px] text-white mt-8 gap-3">
                  <p>
                    {convertDateFormat(selectedBlogData?.lastPublishedDate)} .{" "}
                    {selectedBlogData?.minutesToRead} min read
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[653px] relative">
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/images/Services/web-dev/sec1.webp"
              />
              <Image
                width={1000}
                height={1000}
                quality={100}
                src="/assets/images/Services/web-dev/sec1.png"
                className="w-full object-fill"
                alt="section1ImgAFFORDABLE, STUNNING WEB DESIGN "
              />
            </picture>
          </div>
        </section>
      </BackgroundImage>

      <section className="w-[100%] max-w-[1500px] flex-col gap-6 xl:gap-x-10 lg:flex-row xl:flex-row px-[50px] mx-auto items-start mt-5 flex py-4">
        <div className="w-full max-w-[320px] flex-[2] 2xl:flex-[1] mx-auto xl:sticky  xl:top-8 xl:left-0">
          {/* <TableContent data={blogData.tableContent} /> */}
          <SubscribeForm />
        </div>
        <div className="editor w-full max-w-[1120px] flex-[5]">
          {nodes.slice(1).map((node, index) => (
            <div key={index}>{renderNode(node)}</div>
          ))}
        </div>

        {/* <div
          className="w-full max-w-[1120px] flex-[5]"
          dangerouslySetInnerHTML={{ __html: blogData?.content }}
        ></div> */}
      </section>

      <section className="w-[100%] max-w-[1440px] flex-col gap-5  px-[30px] mx-auto  mt-24 flex py-4">
        <div className="mt-4">
          <h4 className="font-DM text-[20px] lg:xl-[26px] font-[700] ">
            Related Blogs
          </h4>
        </div>
        <FeaturedBlogsSection blogData={featuredBlogs} />
      </section>

      <BusinessSection
        firstText="Ready to Grow"
        orangeText=" Your Business"
        lastText="With Strugbits?"
        para="We're ready to brainstorm, design, develop, and support your digital dreams. Let's come up with a plan, set ambitious goals, and turn your aspirations into achievements. Your growth story starts right here, are you ready to begin?"
      />
    </main>
  );
};

export default BlogsDetailsPage;
