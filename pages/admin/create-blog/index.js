// pages/create_blog.js
import React from 'react';
import Sidenav from '../../../components/Sidenav';
import BlogForm from '../../../components/BlogForm';

const CreateBlog = () => {
  return (
    <div className='flex'>
      <div className='w-[18vw]'>

      <Sidenav/>
      </div>
      <div className='w-[90vw]'>

        <BlogForm></BlogForm>
      </div>

      
    </div>
  );
};

export default CreateBlog;
