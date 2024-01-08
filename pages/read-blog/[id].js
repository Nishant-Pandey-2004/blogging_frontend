"use client";
import React, { useState } from 'react';
import BlogContainer from '../../components/BlogContainer'
import BlogsInfo from '../../public/BlogsInfo';
import RecommendationList from '../../components/RecommendationList';
import Advertisement from '../../components/Adverisement';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SingleBlog = ({data}) => {
    console.log(data.response);
    const [selectedBlog, setSelectedBlog] = useState(data.response);

    const handleBlogClick = (key) => {
        const blog = BlogsInfo.find(blog => blog.key === key);
        setSelectedBlog(blog);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Navbar />

            <div>
                    <BlogContainer
                        key={data.id}
                        title={data.title}
                        author={data.title}
                        thumbnail={data.front_image}
                        content={selectedBlog.content}
                    />
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

export default SingleBlog;

export async function getServerSideProps(context) {
    let data = [];
    const { req } = context;
    const Cookie = req.headers.cookie;
    const query = context.query;
    const blogId = query.id; 
    const apiUrl = `http://127.0.0.1:8000/api/fetchblog/${blogId}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            data = await response.json();
        } else {
            console.error(`Failed to fetch blog details. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error during API call:', error);
    }
  
    return {
      props: {
        data,
      },
    };
  }
  