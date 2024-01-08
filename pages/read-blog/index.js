"use client";
import React, { useState } from 'react';
import BlogContainer from '../../components/BlogContainer'
import BlogsInfo from '../../public/BlogsInfo';
import RecommendationList from '../../components/RecommendationList';
import Advertisement from '../../components/Adverisement';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Page = () => {
    const [selectedBlog, setSelectedBlog] = useState(BlogsInfo[0]);

    const handleBlogClick = (key) => {
        const blog = BlogsInfo.find(blog => blog.key === key);
        setSelectedBlog(blog);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Navbar />

            <div>
                {selectedBlog && 
                    <BlogContainer
                        key={selectedBlog.key}
                        title={selectedBlog.title}
                        author={selectedBlog.author}
                        thumbnail={selectedBlog.thumbnailImageURL}
                        content={selectedBlog.content}
                    />
                }
            </div>

            <div className="min-h-screen md:m-12 md:p-12">
                <h2 className="text-2xl font-bold ml-8"> Recommendations</h2>
                <div className="flex flex-wrap justify-center">
                    <RecommendationList onBlogClick={handleBlogClick} />
                    <Advertisement />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Page;