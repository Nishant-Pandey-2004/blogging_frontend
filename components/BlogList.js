// components/BlogList.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SubcategoryCard from './SubCategoryCard'; // Import the SubcategoryCard component
import blogsData from '../Data/blogsData.json'; // Adjust the path accordingly
import { useRouter } from 'next/router';
import Ad from './Ad';

const BlogList = () => {
  const router = useRouter();
  const [blogsByCategory, setBlogsByCategory] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState();

  useEffect(() => {
    if (selectedSubcategory) {
      // Filter blogs based on the selected subcategory
      const filteredBlogs = blogsData.map((category) => {
        if (category.childCategories && category.childCategories.length > 0) {
          const filteredChildCategories = category.childCategories.filter(
            (childSubcategory) => childSubcategory.id === selectedSubcategory.id
          );

          if (filteredChildCategories.length > 0) {
            return {
              ...category,
              blogs: filteredChildCategories[0].blogs,
            };
          }
        }

        return category;
      });

      setBlogsByCategory(filteredBlogs);
    } else {
      // If no subcategory is selected, use all blogs
      setBlogsByCategory(blogsData);
    }
  }, [selectedSubcategory]);

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className="Blogs">
      <div className='m-20 ml-[30vw]'>
        <Ad />
      </div>
      {blogsByCategory.map((category) => (
        <div key={category.id}>
          {/* Category Banner */}
          <div className="w-full">
            <Image className='w-full h-[50vh]' src={category.bannerImage} alt={`Banner for ${category.category}`} width={500} height={100} />
          </div>

          {/* Category Info */}
          <div className="absolute mt-[-25vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className='text-4xl font-bold'>
              {selectedSubcategory ? selectedSubcategory.category : category.category}
            </h2>
          </div>
          <div>
            <p className='m-10 text-justify'>
              {selectedSubcategory ? selectedSubcategory.categoryInfo : category.categoryInfo}
            </p>
          </div>

          {/* Subcategory Cards */}
          {category.childCategories && category.childCategories.length > 0 && (
            <div className="flex justify-center">
              {category.childCategories.map((childSubcategory) => (
                <SubcategoryCard key={childSubcategory.id} subcategory={childSubcategory} onClick={() => handleSubcategoryClick(childSubcategory)} />
              ))}
            </div>
          )}

          {/* Blogs */}
          <div className='flex justify-evenly'>
            <div className='w-[60vw]'>
              <h2 className='text-4xl font-bold m-10'>{selectedSubcategory ? selectedSubcategory.category : category.category} Blogs</h2>
              {selectedSubcategory ? (
                // Display blogs for the selected subcategory
                <div className="m-10">
                  {selectedSubcategory.blogs.map((blog) => (
                    // Replace the existing Link components with the following
                    <Link key={blog.id} href={`/blog/${blog.id}`}>
                      <div
                        className="flex mt-[28px] w-[57vw]"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(`/blog/${blog.id}`);
                        }}
                      >
                        <div className='img'>
                          <Image src={blog.thumbnail} alt={'image'} width={204} height={119} />
                        </div>
                        <div className='ml-10'>
                          <div className="text-zinc-900 text-[20px] font-semibold">{blog.title}</div>
                          <div className='text-zinc-600 text-xs font-normal'>{blog.date}</div>
                          <div className='flex justify-between w-[42vw]'>
                            <div className='text-zinc-900 text-xs font-light'>By {blog.author}</div>
                            <button>
                              <Image src={'/Vector.svg'} width={10} height={10} className='' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>

                  ))}
                </div>
              ) : (
                // Display blogs for the main category
                <div className="m-10">
                  {category.blogs.map((blog) => (
                    // Replace the existing Link components with the following
                    <Link key={blog.id} href={`/blog/${blog.id}`}>
                      <div
                        className="flex mt-[28px] w-[57vw]"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(`/blog/${blog.id}`);
                        }}
                      >
                        <div className='img'>
                          <Image src={blog.thumbnail} alt={'image'} width={204} height={119} />
                        </div>
                        <div className='ml-10'>
                          <div className="text-zinc-900 text-[20px] font-semibold">{blog.title}</div>
                          <div className='text-zinc-600 text-xs font-normal'>{blog.date}</div>
                          <div className='flex justify-between w-[42vw]'>
                            <div className='text-zinc-900 text-xs font-light'>By {blog.author}</div>
                            <button>
                              <Image src={'/Vector.svg'} width={10} height={10} className='' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className='w-[20vw]'>
              <Ad />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;