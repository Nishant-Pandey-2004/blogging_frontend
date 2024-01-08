// pages/create_blog.js
import React from 'react';
import BlogForm from '../components/BlogForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const CreateBlog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BlogForm/>
      <Footer></Footer>
  
    </div>
  );
};

export default CreateBlog;
