// pages/create_blog.js
import React from 'react';
import Sidenav from '../../components/sidenav';
import BlogForm from '../../components/BlogForm';

const CreateBlog = () => {
  return (
    <div>

      <Sidenav>
        <BlogForm></BlogForm>
      </Sidenav>

      
    </div>
  );
};

export default CreateBlog;
