/* eslint-disable @typescript-eslint/no-explicit-any */
// import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import client from "../../../../client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Props } from "@/types/index";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Function to generate image URLs
function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

// ✅ Fetch all slugs at build time
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "blog"]{slug}`);
  return posts.map((post: any) => ({ slug: post.slug.current }));
}

// ✅ Fetch blog post data
const getBlogPost = async (slug: string) => {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      "name": author->name,
      "authorImage": author->image,
      categories[]->{ title },
      body
    }`,
    { slug }
  );
};

const CodeBlock = ({ value }: Props) => {
  const { code, language } = value;
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      showInlineLineNumbers={true}
      language={language}
      style={tomorrowNightBright}
      customStyle={{
        padding: "1em",
        marginBottom: "2em",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)
            .width(320)
            .height(240)
            .fit("max")
            .auto("format")
            .url()}
        />
      );
    },
    codeBlock: ({ value }: any) => {
      return <CodeBlock value={value} />;
    },
  },
};

// ✅ Page Component
export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const post = await getBlogPost(slug);
  if (!post) {
    notFound();
  }

  const { title, name, categories, authorImage, body } = post;

  return (
    <div className="lg:max-w-7xl mx-auto max-w-3xl md:px-10 px-6 my-16">
      <article>
        <h1 className="text-3xl font-bold">{title}</h1>
        <span className="text-gray-600">By {name}</span>
        {categories && (
          <ul className="mt-2">
            <strong>Posted in:</strong>
            {categories.map((category: any, index: number) => (
              <li key={index} className="inline-block px-2 text-blue-600">
                {category.title}
              </li>
            ))}
          </ul>
        )}
        {authorImage && (
          <div className="mt-4 flex justify-center">
            <Image
              src={urlFor(authorImage).width(250).url()}
              alt={`${name}'s picture`}
              className=""
              width={250}
              height={250}
            />
          </div>
        )}
        <div className="portable-text mt-6">
          <PortableText value={body} components={ptComponents} />
        </div>
      </article>
    </div>
  );
}
