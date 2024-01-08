"use client"
import React, { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp, FaShareAlt, FaRegBookmark, FaBookmark } from 'react-icons/fa';

function ActionButtons() {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const toggleSaved = () => {
        setSaved(!saved);
    };

    const shareBlog = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Blog Title',
                text: 'Check out this blog!',
                url: window.location.href,
            })
            .catch((error) => console.log('Error sharing', error));
        } else {
            console.log("Your System doesn't support Web Share API");
        }
    };

    return (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mx-auto m-10">
            <button onClick={toggleLike} className={`flex items-center space-x-2 text-black rounded px-2 sm:px-4 py-1 sm:py-2 w-full sm:w-auto justify-center ${liked ? 'animate-bounce' : ''} hover:bg-gray-200 transition duration-200 ease-in-out`}>
                {liked ? <FaThumbsUp size={20} className="text-red-500" /> : <FaRegThumbsUp size={20} />}
                <span className={`font-bold text-sm sm:text-base ${liked ? 'text-red-500' : ''}`}>Like</span>
            </button>
            <button onClick={shareBlog} className="flex items-center space-x-2 text-black rounded px-2 sm:px-4 py-1 sm:py-2 w-full sm:w-auto justify-center hover:bg-gray-200 transition duration-200 ease-in-out">
                <FaShareAlt size={20} />
                <span className="font-bold text-sm sm:text-base">Share</span>
            </button>
            <button onClick={toggleSaved} className={`flex items-center space-x-2 text-black rounded px-2 sm:px-4 py-1 sm:py-2 w-full sm:w-auto justify-center hover:bg-gray-200 transition duration-200 ease-in-out ${saved ? 'text-green-500' : ''}`}>
                {saved ? <FaBookmark size={20} className="text-green-500" /> : <FaRegBookmark size={20} />}
                <span className="font-bold text-sm sm:text-base">{saved ? 'Saved' : 'Save'}</span>
            </button>
        </div>
    );
}

export default ActionButtons;
