import Image from "next/image";
import React from "react";
import BannerImag from "../public/images/banner.png"
function BannerImage() {
    return (
        <div className="relative pb-6 mx-4 mt-4">
            <Image
                className="w-full h-64 sm:h-48 md:h-48 object-cover rounded-lg"
                alt="Banner Image"
                src={BannerImag}
                width={30}
                height={30}
            />
        </div>
    );
}

export default BannerImage;