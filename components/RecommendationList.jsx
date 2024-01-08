import React from 'react'
import blogs from '../public/BlogsInfo'
import Recommendation from './Recommendation'

const RecommendationList = ({ onBlogClick }) => {
    return (
        <div className="lg:w-3/5 h-screen overflow-y-auto">
            {blogs.map((blog, index) => (
                <Recommendation key={index} blog={blog} onBlogClick={onBlogClick} />
            ))}
        </div>
    )
}

export default RecommendationList