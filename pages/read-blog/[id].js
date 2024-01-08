import React from 'react';
import BlogContainer from '../../components/BlogContainer'
import BlogsInfo from '../../public/BlogsInfo';
import RecommendationList from '../../components/RecommendationList';
import Advertisement from '../../components/Adverisement';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = BlogsInfo.map((blog, index) => ({
    params: { id: (index + 1).toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const selectedBlog = BlogsInfo[params.id - 1]

  return { props: { selectedBlog } }
}

const Page = ({ selectedBlog }) => {
    const router = useRouter()

    const handleBlogClick = (key) => {
        const blog = BlogsInfo.find(blog => blog.key === key);
        if (blog) {
            router.push(`/read-blog/${blog.key}`);
        }
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