// pages/blog/[category].js

import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import BlogList from '@/components/BlogList';

const BlogViewList = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <BlogList category={category} />
    </div>
  );
};

export default BlogViewList;
