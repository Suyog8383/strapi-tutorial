import NavBar from "@/components/navBar";
import React from "react";

const Products = async () => {
  const data = await getData();
  console.log("@SN ", data.data[1].attributes.image.data.attributes);
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Product List - Myshop
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {data.data.map((item, index) => {
              return (
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={index}>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src={`http://localhost:1337${
                        item.attributes.image.data &&
                        item.attributes.image.data.attributes.url
                      }`}
                    />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    {item.attributes.title}
                  </h2>
                  <p className="text-base leading-relaxed mt-2">
                    {item.attributes.description}
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-3">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Products;

async function getData() {
  const res = await fetch("http://localhost:1337/api/products?populate=*", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer f47a3573dafb159ea065c7ffc93a7b0dbb345262f922e0cf2c18a18cb5b9c176f930422b4a07e758d59134e3fdd9e2f9d0562de6dd3cc349805f3fc24052e63c4f4289614079d50a9674995eb9f58b5871270b1671aba968941a5af3913b8e729216da9445617e6c285a00f494b1f6d1fcf3a9b88571059e848390426462ad40",
    },
  });
  const result = await res.json();
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }
  console.log("@SN ", result);

  return result;
}
