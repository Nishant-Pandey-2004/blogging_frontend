import React from "react";

function ProfileImage() {
    return (
        <img
            className="absolute bottom-0 -mb-10 ml-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 object-cover rounded-full border-4 border-white"
            alt="profile image"
            src="./images/profile.png"
        />
    );
}

export default ProfileImage;