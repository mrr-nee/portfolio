import React from "react";
import Image from "next/image";

export const ExperienceCard = (props: {
  imgUrl: string;
  experienceTitle: string;
}) => {
  return (
    <div className="flex hover:flex flex-col bg-white border shadow-slate-100 rounded-xl bg-gradient-to-tl from-indigo-500">
      <div className="p-4 md:p-5">
        <div className="flex">
          <div className="border shadow-slate-100 rounded-l-lg overflow-auto h-full w-20">
            <Image
              src={props.imgUrl}
              width={100}
              height={100}
              alt="profile-pic"
              className="h-12 w-13"
            />
          </div>
          <h4 className="text-lg font-bold text-white pl-4">
            {props.experienceTitle}
          </h4>
        </div>

        <p className=" text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <a
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          View Projects
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};
