import Image from "next/image";
import React from "react";

function CardIssue() {
  return (
    <>
        <h1 className="text-center font-bold text-3xl mt-10">Issue Area</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">

          <div className="relative">
            <Image
              width={300}
              height={300}
              className="w-full h-48 object-cover"
              src="https://source.unsplash.com/random/600x360"
            />
            <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
              New
            </div>
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
              3 min read
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-5 mt-5">
            <button className="bg-blue-500 p-2 rounded-xl w-24 text-white">Agree</button>
            <button className="bg-red-500 p-2 rounded-xl w-24 text-white">Disagree</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <Image
              width={300}
              height={300}
              className="w-full h-48 object-cover"
              src="https://source.unsplash.com/random/600x360"
            />
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
              3 min read
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-5 mt-5">
            <button className="bg-blue-500 p-2 rounded-xl w-24 text-white">Agree</button>
            <button className="bg-red-500 p-2 rounded-xl w-24 text-white">Disagree</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <Image
              width={300}
              height={300}
              className="w-full h-48 object-cover"
              src="https://source.unsplash.com/random/600x360"
            />
            <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
              New
            </div>
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
              3 min read
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-5 mt-5">
            <button className="bg-blue-500 p-2 rounded-xl w-24 text-white">Agree</button>
            <button className="bg-red-500 p-2 rounded-xl w-24 text-white">Disagree</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <Image
              width={300}
              height={300}
              className="w-full h-48 object-cover"
              src="https://source.unsplash.com/random/600x360"
            />
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
              3 min read
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-5 mt-5">
            <button className="bg-blue-500 p-2 rounded-xl w-24 text-white">Agree</button>
            <button className="bg-red-500 p-2 rounded-xl w-24 text-white">Disagree</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <Image
              width={300}
              height={300}
              className="w-full h-48 object-cover"
              src="https://source.unsplash.com/random/600x360"
            />
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
              3 min read
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-5 mt-5">
            <button className="bg-blue-500 p-2 rounded-xl w-24 text-white">Agree</button>
            <button className="bg-red-500 p-2 rounded-xl w-24 text-white">Disagree</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <Image
              width={300}
              height={300}
              className="w-full h-48 object-cover"
              src="https://source.unsplash.com/random/600x360"
            />
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
              3 min read
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
              aliquam quam massa id lacus.
            </p>
            <div className="flex gap-5 mt-5">
            <button className="bg-blue-500 p-2 rounded-xl w-24 text-white">Agree</button>
            <button className="bg-red-500 p-2 rounded-xl w-24 text-white">Disagree</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardIssue;
