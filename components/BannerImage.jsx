import React from "react";

function BannerImage() {
    return (
        <div className="relative pb-6 mx-4 mt-4">
            <img
                className="w-full h-64 sm:h-48 md:h-48 object-cover rounded-lg"
                alt="Banner Image"
                src="./images/banner.png"
            />
        </div>
    );
}

export default BannerImage;