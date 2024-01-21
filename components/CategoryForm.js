// components/BlogForm.js
import React, { useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import ImageUpload from './ImageUpload';
import styles from './CategoryForm.module.css';

const categories = [
  {
    id: 1,
    name: 'Technology',
    subcategories: [
      {
        name: 'Programming',
        subcategories: [
          {
            name: 'JavaScript',
          },
          {
            name: 'Python',
          },
          {
            name: 'Java',
          },
        ],
      },
      {
        name: 'Gadgets',
      },
    ],
  },
  {
    id: 2,
    name: 'Science',
    subcategories: [
      {
        name: 'Physics',
      },
      {
        name: 'Biology',
      },
      {
        name: 'Chemistry',
      },
    ],
  },
  {
    id: 3,
    name: 'Travel',
    subcategories: [
      {
        name: 'Adventure',
      },
      {
        name: 'Cultural',
        subcategories: [
          {
            name: 'Historical',
          },
          {
            name: 'Festivals',
          },
        ],
      },
    ],
  },
];


const CatForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState([]);

  const handleImageChange = (selectedImage) => {
    setImage(selectedImage);
  };

  const handleSubmit = () => {
    // Implement your logic to save the blog post
    console.log('Category:', selectedCategory);
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Tags:', tags);
    console.log('Image:', image);

    // Reset state after submitting
    setSelectedCategory('');
    setTitle('');
    setDescription('');
    setTags('');
    setImage(null);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const renderCategoryOptions = (categories, depth = 0) => {
    return categories.map((category) => (
      <React.Fragment key={category.id || category.name}>
        <option
          value={category.id ? category.id : category.name}
          style={{
            backgroundColor: depth === 0 ? '#f0f0f0' : 'white',
            fontWeight: 'bold',
            marginLeft: `${depth * 20}px`,
          }}
        >
          {depth > 0 ? Array(depth).fill('----').join('') : ''} {category.name}
        </option>
        {category.subcategories && category.subcategories.length > 0 && renderCategoryOptions(category.subcategories, depth + 1)}
      </React.Fragment>
    ));
  };


  return (
    <>
      <h3 className="mx-20 mt-6 text-sm">Editor  / </h3>
      <hr />
      <div className={`p-4 ${styles.blogFormContainer}`}>
        <div className='flex'>
          <div className='bg-slate-200 rounded-xl p-5 w-full'>
            <table className='w-full'>
              {/* Category and Title */}
              <tr>
                <td className="p-4">
                  <label htmlFor="category" className={`${styles.requiredField} text-sm`}>
                    <strong>Category:</strong>
                  </label>
                </td>
                <td>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className={`${styles.selectField} text-lg`}
                    required
                  >
                    <option value="" disabled>
                      -------------Select the category or subcategory-----------------------------------------------
                    </option>
                    {renderCategoryOptions(categories)}
                  </select>
                </td>
              </tr>
              <tr>
                <td className='p-4'>
                  <label htmlFor="title" className={`${styles.requiredField} text-sm`}>
                    <strong>Sub-Category:</strong>
                  </label>
                </td>
                <td >
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`${styles.inputField} text-sm`}
                    required
                    placeholder='Enter the new Sub-category'
                  />
                </td>
              </tr>

              {/* Description */}
              <tr>
                <td className='p-4'>
                  <label htmlFor="description" className={`${styles.requiredField} text-sm`}>
                    <strong>Description:</strong>
                  </label>
                </td>

                <td colSpan={4}>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`${styles.textareaField} text-sm`}
                    required
                    placeholder='Add a brief description....'
                  />
                </td>
              </tr>
            </table>

            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
              <div className='text-black p-4 mt-4 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
                <h1 className='mb-2 text-sm'><strong>Tags</strong></h1>
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="tags"
                  placeHolder="Enter TAG..."
                  className="text-sm"
                />
                <div className="selected-tags flex">
                  {selected.map((tag, index) => (
                    <div key={index} className="tag bg-orange-400 text-white text-sm p-0.5 pr-2 pl-2 m-2 mt-0 rounded-full mr-2 mb-2 w-fit">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className='p-4 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
                <h1 className='text-sm font-bold pl-4'>Upload Images:</h1>
                <div className='p-4'>
                  <div className='items-center ml-12  mr-40'>
                    <b><h4 className='mr-2 text-sm'>Front Image:</h4></b>
                    <div className='w-64 h-12 align-middle p-2 bg-white shadow'>
                      <ImageUpload onImageChange={handleImageChange} />
                    </div>
                  </div>

                  <div className='items-center ml-12 mr-40'>
                    <b><h4 className='mr-2 text-sm'>Cover Image:</h4></b>
                    <div className='w-64 h-12 align-middle p-2 bg-white shadow'>
                      <ImageUpload onImageChange={handleImageChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>


        {/* Submit Button */}
        <button className={`bg-green-500 font-bold text-white px-4 py-2 mt-4 rounded-lg flex items-center m-12`} onClick={handleSubmit}>
          CREATE CATEGORY
        </button>

      </div>

    </>
  );
};

export default CatForm;
