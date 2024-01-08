import React from 'react'
import { FaHeart, FaRegClock } from 'react-icons/fa'

const Recommendation = ({ blog, onBlogClick }) => {
    const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-GB');

    return (
        <div 
            className="flex items-start bg-gray-100 rounded-lg p-8 m-8" 
            style={{ backgroundColor: '#EFEAE3' }} 
            onClick={() => onBlogClick(blog.key)}
        >
            <div className="overflow-hidden mr-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32">
                <img src={blog.thumbnailImageURL} alt="blog thumbnail" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-between w-full">
                <div>
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                    <p className="">{blog.content[0].substring(0, 100) + "..."}</p>
                </div>
                <div className="mt-4 flex justify-between">
                    <div><p className="text-sm mt-4">{blog.author}</p></div>
                    <div className="flex items-center text-sm">
                        <FaRegClock className="mr-2" />
                        <span className="mr-4">{formattedDate}</span>
                        <span className="mr-4">/</span>
                        <FaHeart className="mr-2" style={{ color: 'red' }} />
                        <span>{blog.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendation;