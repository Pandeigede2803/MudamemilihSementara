// components/ArticleSection.js
import React from "react";

const articles = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content:
      "Learn the basics of Next.js and build your first app,Learn the basics of Next.js and build your first app,Learn the basics of Next.js and build your first appLearn the basics of Next.js and build your first app.",
    imageUrl:
      "https://ik.imagekit.io/m1akscp5q/prabowo%20artikel.png?updatedAt=1702216086363",
  },
  {
    id: 2,
    title: "Tailwind CSS for Styling",
    content:
      "Explore the power of Tailwind CSS for styling your Next.js projects Learn the basics of Next.js and build your first app Learn the basics of Next.js and build your first app.",
    imageUrl:
      "https://ik.imagekit.io/m1akscp5q/prabowo%20artikel.png?updatedAt=1702216086363",
  },
  {
    id: 3,
    title: "Fetching Data in Next.js",
    content:
      "Understand different ways to fetch data in a Next.js application Learn the basics of Next.js and build your first app Learn the basics of Next.js and build your first app.",
    imageUrl:
      "https://ik.imagekit.io/m1akscp5q/prabowo%20artikel.png?updatedAt=1702216086363",
  },
  {
    id: 4,
    title: "Deploying Next.js Apps",
    content:
      "Learn how to deploy your Next.js apps to various hosting platforms.Learn the basics of Next.js and build your first app Learn the basics of Next.js and build your first app",
    imageUrl:
      "https://ik.imagekit.io/m1akscp5q/prabowo%20artikel.png?updatedAt=1702216086363",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const ArticleSection = () => {
  return (
    <section className="py-16 mx-2 font-sans">
      <div className="container mx-auto">
        <h2 className="text-3xl text-sans font-semibold mb-8 mx-auto text-center">
          Kenali Pilihanmu dengan artikel yang tersedia
        </h2>
        <p className="text-center text-sm font-normal my-1 text-abu ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          molestias non ea harum esse placeat quisquam aliquam sunt nesciunt,
          dignissimos, consectetur, beatae magni numquam. Ducimus excepturi
          dolorem debitis corrupti officiis?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.slice(0, 4).map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 rounded-lg w-151 h-54 hover:bg-accent2 shadow-md flex"
            >
              <div className="flex-none my-auto w-fit mr-4 pr-0 bg-gray-200">
                <img src={article.imageUrl} alt="Article" className="w-40" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                <p className="text-gray-600">
                  {truncateText(article.content, 100)}
                </p>
                <button className="mt-4 py-2 pr-4 inline-flex items-center justify-center align-middle text-center my-auto  hover:text-primary text-black font-semibold rounded">
                  Get Info
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
