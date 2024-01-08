import React from "react";
import BannerImage from "./BannerImage";
import ProfileImage from "./ProfileImage";
import ActionButtons from "./ActionButtons";
import Thumbnail from "./Thumbnail";

const BlogContainer = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen md:m-12 md:p-12">
      <div className="m-8">
        <div className="relative">
          {/* Using Banner Image Component */}
          <BannerImage />

          {/* Using Profile Image Component */}
          <ProfileImage />
        </div>

        {/* Using props and map function for loading content dynamically*/}
        <div className="p-4 bg-white rounded-lg shadow-md mt-16">
          <div className="mb-4">
            <div className="text-6xl font-bold text-gray-800">
              {props.title}
            </div>
            <div className="mt-2">
              <div className="text-3xl font-bold text-[#344054]">
                By {props.author}
              </div>
            </div>

            <div>
              {/* Using Thumbnail Component */}
              <Thumbnail
                thumbnail={props.thumbnail}
              />

              {/* Using Action Buttons Component for Like, Sharee and Save*/}
              <ActionButtons />
            </div>
          </div>

          <div className="text-xl font-semibold leading-relaxed">
            {/* Dynamically loading content using props and map function  from BlogsInfo.js*/}
            {props.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
