/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import client from "../../../../client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// ✅ Generate static params at build time
export const generateStaticParams = async () => {
  const posts = await client.fetch(`*[_type == "post"]{slug}`);
  return posts.map(({ slug }: { slug: { current: string } }) => ({
    slug: String(slug.current),
  }));
};

// ✅ Define params type
export type paramsType = Promise<{ slug: string }>;

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

// ✅ Code Block Component for Syntax Highlighting
const CodeBlock = ({
  value,
}: {
  value: { code: string; language: string };
}) => (
  <SyntaxHighlighter
    showLineNumbers={true}
    showInlineLineNumbers={true}
    language={value.language}
    style={tomorrowNightBright}
    customStyle={{
      padding: "1em",
      marginBottom: "2em",
    }}
  >
    {value.code}
  </SyntaxHighlighter>
);

// ✅ PortableText components
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <Image
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").url()}
          width={320}
          height={240}
        />
      );
    },
    codeBlock: ({ value }: any) => <CodeBlock value={value} />,
  },
};

// ✅ Function to generate image URLs
function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

// ✅ Blog Detail Page Component
export default async function BlogDetailPage(props: { params: paramsType }) {
  const { slug } = await props.params;

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
