// pages/admin/admin_category.js
import React from 'react';
import Sidenav from '../../../components/Sidenav';
import CatForm from '../../../components/CategoryForm';

const CreateBlog = () => {
  return (
    <div className='flex'>
      <div className='w-[18vw]'>

      <Sidenav/>
      </div>
      <div className='w-[90vw]'>

        <CatForm></CatForm>
      </div>

      
    </div>
  );
};

export default CreateBlog;
